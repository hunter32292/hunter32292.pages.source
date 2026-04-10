# hunter32292.pages.source

This is the **source repository** for [hunter32292.github.io](https://hunter32292.github.io) — John Stupka's personal portfolio site hosted on GitHub Pages.

The repo is named `hunter32292.pages.source` to distinguish it from the deployed Pages repo (`hunter32292.github.io`). Development happens here; the compiled output gets published there.

## How It Works

1. Code lives in this repo (`hunter32292.pages.source`)
2. `npm run build` produces a static bundle in `build/`
3. That output is pushed to `hunter32292.github.io` and served via GitHub Pages

## Tech Stack

- **React** (Create React App)
- **React Router** — client-side routing with `HashRouter` for GitHub Pages compatibility
- **Semantic UI React** — UI component library
- **GitHub Pages** — static hosting

## Pages

- **Home** — intro and welcome
- **About** — bio and background
- **Resume** — redirects to LinkedIn
- **Contact** — social and professional links
- **Site** — history of the site's evolution across different frameworks

## Local Development

```bash
npm install
npm start
```

Runs the app at `http://localhost:3000`.

## Build

```bash
npm run build
```

Outputs a production-ready static bundle to `build/`. Deploy the contents of that folder to the `hunter32292.github.io` repo.
