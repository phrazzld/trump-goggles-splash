# Trump Goggles Splash Page

Landing page for the [Trump Goggles](https://github.com/phrazzld/trump-goggles) browser extension.

## What is Trump Goggles?

A browser extension that translates text to Trumpisms as you browse:
- "ISIS" → "Evil Losers"
- "Hillary Clinton" → "Crooked Hillary"
- "The Media" → "Fake News"

## Development

This is a static site. No build step required.

```bash
# Open directly in browser
open index.html

# Or use any static server
python3 -m http.server 3000
npx serve .
```

## Structure

```
├── index.html      # Single page
├── styles/
│   └── main.css    # All styles
├── scripts/
│   └── main.js     # Scroll animations (~40 lines)
├── favicon.ico
└── README.md
```

## Links

- **Chrome Web Store:** [Install Trump Goggles](https://chromewebstore.google.com/detail/trump-goggles/jffbimfdmgbfannficjejaffmnggoigd)
- **Extension Source:** [github.com/phrazzld/trump-goggles](https://github.com/phrazzld/trump-goggles)

## License

MIT
