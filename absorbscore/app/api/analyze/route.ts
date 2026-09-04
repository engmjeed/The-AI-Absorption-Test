import { NextRequest, NextResponse } from 'next/server';

const MAX_HTML = 18000;

function normalizeUrl(input: string) {
  const u = new URL(input);
  if (!['http:', 'https:'].includes(u.protocol)) throw new Error('Only http/https URLs are supported');
  return u.toString();
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, MAX_HTML);
}

function extractJson(text: string) {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('Model returned invalid output');
  return JSON.parse(match[0]);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const url = normalizeUrl(String(body.url || ''));

    const page = await fetch(url, {
      redirect: 'follow',
      headers: { 'user-agent': 'AbsorbScore/0.1 (+product survivability analysis)' },
      signal: AbortSignal.timeout(9000)
    });

    if (!page.ok) {
      return NextResponse.json({ error: `Could not read that website (${page.status})` }, { status: 400 });
    }

    const contentType = page.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      return NextResponse.json({ error: 'Please submit a public product website URL' }, { status: 400 });
    }

    const html = await page.text();
    const text = stripHtml(html);
    if (text.length < 120) {
      return NextResponse.json({ error: 'Not enough public product information was found' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Analysis engine is not configured yet' }, { status: 503 });
    }

    const prompt = `You are AbsorbScore, a ruthless product survivability analyst.\n\nEvaluate the product represented by the public website text below. Score AI absorption risk from 0 to 100, where 100 means most of the product's value can be recreated, embedded, or made irrelevant by rapidly improving general AI models/platforms. Focus on actual product mechanics, distribution, proprietary data, workflow lock-in, network effects, execution in the real world, identity/permissions, and outcome ownership. Do not flatter. Do not invent facts not present in the page.\n\nReturn ONLY valid JSON with exactly this shape:\n{\n  "productName":"string",\n  "score":0,\n  "verdict":"BUILD|PIVOT|KILL",\n  "summary":"2-3 concise sentences",\n  "risks":["3 to 5 concrete risks"],\n  "defenses":["3 to 5 concrete survival levers"],\n  "nextMove":"one concrete next move under 40 words"\n}\n\nVerdict guidance: BUILD if risk <= 35 and there is defensible non-model value; PIVOT if 36-74 or survivability requires redesign; KILL if >=75 and the public value proposition is primarily model-replicable with weak defenses.\n\nURL: ${url}\n\nWEBSITE TEXT:\n${text}`;

    const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    const ai = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, responseMimeType: 'application/json' }
      }),
      signal: AbortSignal.timeout(20000)
    });

    if (!ai.ok) {
      return NextResponse.json({ error: 'Analysis engine failed. Try again.' }, { status: 502 });
    }

    const aiBody = await ai.json();
    const raw = aiBody?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) throw new Error('Empty model response');
    const result = extractJson(raw);

    const score = Math.max(0, Math.min(100, Number(result.score)));
    return NextResponse.json({
      productName: String(result.productName || new URL(url).hostname),
      score: Number.isFinite(score) ? Math.round(score) : 50,
      verdict: ['BUILD', 'PIVOT', 'KILL'].includes(result.verdict) ? result.verdict : 'PIVOT',
      summary: String(result.summary || ''),
      risks: Array.isArray(result.risks) ? result.risks.slice(0, 5).map(String) : [],
      defenses: Array.isArray(result.defenses) ? result.defenses.slice(0, 5).map(String) : [],
      nextMove: String(result.nextMove || '')
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid request';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
