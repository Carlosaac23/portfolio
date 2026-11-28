# Repository Guidelines

## Project Structure & Module Organization

This portfolio uses Hono, server-rendered TSX, and TypeScript on Node.js. `src/server.ts` starts the server; `src/index.tsx` defines the application, page layout, and routes. Reusable UI lives in `src/components/`, GitHub fetching and link data in `src/lib/`, shared types in `src/types/`, and environment configuration in `src/config/env.ts`. `src/cache.ts` caches repository results. Static CSS, images, and fonts live in `public/static/`, served at `/static/*`. Compiled output goes into `dist/`.

## Build, Test, and Development Commands

Use pnpm, pinned through the `packageManager` field, and keep `pnpm-lock.yaml` updated when dependencies change.

- `pnpm install`: install dependencies.
- `pnpm dev`: watch and run `src/server.ts`, loading variables from `.env`; the default URL is `http://localhost:3000`.
- `pnpm build`: compile TypeScript into `dist/` and check types.
- `pnpm lint`: run Oxlint with correctness checks and the Node plugin.
- `pnpm fmt:check`: check formatting without changing files.
- `pnpm fmt` / `pnpm lint:fix`: apply formatting or automatic lint fixes; review the resulting diff.

## Coding Style & Naming Conventions

Follow the existing two-space indentation, semicolons, single quotes (including JSX), and ES5 trailing commas. Oxfmt also sorts imports. Use strict TypeScript, explicit type-only imports, and `.js` extensions for local module imports. Name files in lowercase or kebab-case (for example, `project-card.tsx`), components and types in PascalCase, and functions and variables in camelCase. Components use `hono/jsx`; follow its existing `class` attribute convention.

## Testing Guidelines

There is no configured test framework, test script, or coverage threshold. Before submitting changes, run `pnpm build`, `pnpm lint`, and `pnpm fmt:check`. Manually verify the homepage, static assets, external links, responsive layout, and relevant empty/error states. For GitHub-fetching changes, verify cached results and failed-request behavior.

## Commit & Pull Request Guidelines

Whenever the user requests Git commits, delegate the task to the committer subagent. Wait for it to finish and report the results.

## Security & Configuration

Keep `.env` and tokens out of Git. Configuration supports `PORT` (default `3000`), optional `GITHUB_TOKEN`, and `CACHE_TTL_MS` (default `3600000`). Avoid logging credentials or including them in screenshots and fixtures.
