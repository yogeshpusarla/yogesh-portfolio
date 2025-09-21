# Yogesh Pusarla — Portfolio 

Vite + React + Tailwind minimalist portfolio. Light/dark/auto themes, highlights, skills, experience, and Featured Articles linked to LinkedIn.

## Local dev
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy to GitHub Pages

### A) User site (https://<user>.github.io)
- Repo name **must** be `<user>.github.io`
- Keep `vite.config.js` with `base: '/'`

### B) Repo site (https://<user>.github.io/REPO_NAME/)
- Set `vite.config.js` → `base: '/REPO_NAME/'`
- In **Settings → Pages**, set **Source = GitHub Actions**
- Push to `main`; the included workflow will publish on each push
