# CLAUDE.md

Static splash page for the Trump Goggles browser extension.

## Project

- **Type:** Static HTML/CSS/JS (no build step)
- **Theme:** Retro Americana (red, blue, cream, gold)
- **Font:** Playfair Display (Google Fonts)

## Structure

```
├── index.html      # All sections
├── styles/main.css # Theme + animations
├── scripts/canary.js # Browser error observer
├── scripts/main.js # Scroll observer
├── api/health.js # Vercel health endpoint
├── api/canary/api/v1/errors.js # Browser error relay to Canary
├── tools/ci.js # Local CI gate used by GitHub Actions
├── tools/verify-canary.js # Canary route verification
├── tools/smoke-canary-production.js # Production Canary smoke/readback
└── favicon.ico
```

## Development

```bash
# Open in browser
open index.html

# Or any static server
python3 -m http.server 3000

# Verify Canary health and relay behavior
node tools/verify-canary.js

# Run the full local CI gate
node tools/ci.js

# Verify deployed Canary ingest and readback
CANARY_READ_API_KEY=... node tools/smoke-canary-production.js
```

## URLs

- Chrome Store: https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd
- GitHub: https://github.com/phrazzld/trump-goggles
- Production: https://www.trumpgoggles.com
- Canary: `/api/health` and `/api/canary/api/v1/errors` on Vercel; keep `CANARY_API_KEY` server-only.
