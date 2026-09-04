'use client';

import { FormEvent, useState } from 'react';

type Analysis = {
  productName: string;
  score: number;
  verdict: 'BUILD' | 'PIVOT' | 'KILL';
  summary: string;
  risks: string[];
  defenses: string[];
  nextMove: string;
};

export default function Home() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setAnalysis(null);
    setLoading(true);
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Analysis failed');
      setAnalysis(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analysis failed');
    } finally {
      setLoading(false);
    }
  }

  const founderCheckout = process.env.NEXT_PUBLIC_FOUNDER_CHECKOUT_URL || '#';
  const deepCheckout = process.env.NEXT_PUBLIC_DEEP_CHECKOUT_URL || '#';
  const portfolioCheckout = process.env.NEXT_PUBLIC_PORTFOLIO_CHECKOUT_URL || '#';

  return (
    <main className="shell">
      <nav className="nav">
        <div className="brand">AbsorbScore</div>
        <div className="pill">AI survivability test</div>
      </nav>

      <section className="hero">
        <div className="eyebrow">The AI Absorption Test</div>
        <h1>Will AI absorb your product?</h1>
        <p>Paste your product URL. Get a blunt 0–100 absorption risk score, the reasons your moat may disappear, and the fastest survival redesign.</p>
      </section>

      <section className="card">
        <form className="form" onSubmit={submit}>
          <input
            className="input"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://yourproduct.com"
          />
          <button className="button" disabled={loading}>
            {loading ? 'Stress testing…' : 'Get my AbsorbScore'}
          </button>
        </form>
        <div className="meta"><span>No signup</span><span>Public website analysis</span><span>Blunt verdict</span></div>
        {error && <div className="error">{error}</div>}
      </section>

      {analysis && (
        <section className="section result">
          <div className="card cols">
            <div>
              <div className="score"><div className="num">{analysis.score}</div><div className="label">/100 absorption risk</div></div>
              <div className="verdict">{analysis.verdict}</div>
              <h2>{analysis.productName}</h2>
              <p>{analysis.summary}</p>
              <h3>Next move</h3>
              <p>{analysis.nextMove}</p>
            </div>
            <div>
              <h3>What AI can absorb</h3>
              <ul className="list">{analysis.risks.map((r) => <li key={r}>{r}</li>)}</ul>
              <h3>What can survive</h3>
              <ul className="list">{analysis.defenses.map((r) => <li key={r}>{r}</li>)}</ul>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="grid">
          <div className="metric"><strong>0–100</strong><span>AI absorption risk</span></div>
          <div className="metric"><strong>3</strong><span>Build / Pivot / Kill verdicts</span></div>
          <div className="metric"><strong>1</strong><span>Survival redesign to execute next</span></div>
        </div>
      </section>

      <section className="section">
        <div className="eyebrow">Paid reports</div>
        <h2>Go deeper only if the free score earns it.</h2>
        <div className="pricing">
          <div className="price"><h3>Founder Report</h3><div className="money">$49</div><p>Full risk breakdown, survival design, and prioritized roadmap.</p><a className="button buy" href={founderCheckout}>Get Founder Report</a></div>
          <div className="price"><h3>Deep Audit</h3><div className="money">$199</div><p>Competitive absorption analysis, moat redesign, positioning and execution plan.</p><a className="button buy" href={deepCheckout}>Get Deep Audit</a></div>
          <div className="price"><h3>Portfolio Pack</h3><div className="money">$1,990</div><p>Stress test up to 25 products for a studio, accelerator, or portfolio.</p><a className="button buy" href={portfolioCheckout}>Audit a Portfolio</a></div>
        </div>
      </section>

      <footer className="footer">AbsorbScore is a decision aid, not a guarantee of commercial success. Built on The AI Absorption Test.</footer>
    </main>
  );
}
