<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

This is a single Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4 frontend app (the "Architectural Consultation Portal"). There is no backend/database — "AI chat", OTP, admin login, and leads are all client-side mocks, and state persists to browser `localStorage` (Zustand `persist`). No environment variables are required.

- Package manager is npm (`package-lock.json`). Dependencies are refreshed automatically on startup by the update script.
- Run the dev server with `npm run dev` (Turbopack, http://localhost:3000). Lint with `npm run lint`. See `package.json` scripts.
- Known pre-existing issues (not environment problems; fix only if the task calls for it):
  - The landing page `/` returns HTTP 500 in dev because it renders `next/image` with an `images.unsplash.com` URL that is not allowlisted in `next.config.ts` (`images.remotePatterns`). All other routes work (`/wizard`, `/ai-consultation`, `/contact`, `/summary`, `/booking`, `/admin/login`, `/admin/dashboard`). Use `/wizard` for a quick functional smoke test.
  - `npm run lint` reports pre-existing errors (`@typescript-eslint/no-explicit-any` in `app/wizard/page.tsx`, unescaped entities in `components/landing/Testimonials.tsx`). Because `next build` runs lint/type checks, a production build will fail until these are fixed; prefer `npm run dev` for development.
- `next dev` rewrites the `BEGIN/END:nextjs-agent-rules` block at the top of this file (and `CLAUDE.md`). If it reappears as an uncommitted change, commit it alongside your work to keep the tree clean.
