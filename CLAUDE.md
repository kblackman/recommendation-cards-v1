@AGENTS.md

## Hosting (outside Figma Make)

This is the earlier ("Pre-feedback") Recommendation Cards prototype, exported from Figma Make on 2026-11-16. The newer version lives at ~/Developer/recommendation-cards.

- **Live:** https://kblackman.github.io/recommendation-cards-v1/
- **Repo:** https://github.com/kblackman/recommendation-cards-v1 (public)
- Use **npm** (`npm install`, `npm run dev`, `npm run build`), not pnpm.
- Pushing to `main` deploys via `.github/workflows/deploy.yml`. The workflow sets `FIGMA_PUBLIC_URL=/recommendation-cards-v1`, which `vite.figma.config.ts` uses as the Vite base path. Build locally with the same variable to test the Pages paths.
- Commit and push only when Kyle asks.
