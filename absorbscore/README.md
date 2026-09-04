# AbsorbScore

**Will AI absorb your product?**

Launch-first product built on The AI Absorption Test.

## What ships in v0.1

- Public product URL input
- Public-page extraction
- AI absorption risk score (0–100)
- BUILD / PIVOT / KILL verdict
- Concrete absorption risks
- Survival levers and one next move
- Paid upsell links for Founder Report, Deep Audit, and Portfolio Pack
- No auth, no database, no dashboard
- Private-network URL blocking to reduce SSRF risk

## Local run

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `GEMINI_API_KEY` and optional checkout URLs in `.env.local`.

## Vercel

Use the `absorbscore` directory as the project root. Add the environment variables from `.env.example`. The free score can launch without payment links; paid CTAs become active as soon as checkout URLs are supplied.

## Revenue ladder

- Founder Report — $49
- Deep Audit — $199
- Portfolio Pack — $1,990

High-ticket white-label / accelerator licensing is intentionally sold manually until demand is proven.

## Launch rule

Do not add product features before evidence. First KPI: completed free analyses. Second: paid conversion. Third: cash collected.
