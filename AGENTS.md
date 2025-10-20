# Repository Guidelines

## Project Structure & Module Organization
The site runs on Next.js App Router with TypeScript. Route segments live in `src/app`, where each subdirectory (e.g., `blog`, `letters`, `stack`) maps to a public page and may export server components. Shared UI and primitives live in `src/components` and `src/components/ui`; favor co-locating feature-specific pieces with their consuming route. Long-form content is authored as MDX in `src/content`, while design tokens and media sit in `src/assets` and `public`. Use the `@/...` alias declared in `tsconfig.json` instead of relative paths.

## Build, Test & Development Commands
- `bun install` installs dependencies; keep Bun in sync with the `bun.lock`.
- `bun run dev` starts local dev with Turbopack.
- `bun run build` produces the production bundle; Next emits static assets into `.next` and, when exported, `out/`.
- `bun run start` serves the built app locally for smoke testing.
- `bun run lint` runs `eslint` with `eslint-config-next` and Tailwind rules.

## Coding Style & Naming Conventions
Write modern, typed React components. Prefer server components unless the UI requires client interactivity—mark client modules with `"use client"`. Keep indentation at two spaces, use `const` by default, and export named components/functions. Tailwind classes should stay alphabetized by utility purpose when practical; group custom styles in `globals.css` only when Tailwind cannot express them. Run `bun run lint` before pushing and let the IDE enforce prettier-style formatting.

## Testing Guidelines
No automated test harness ships yet; coordinate before adding new tooling. When introducing tests, co-locate files as `ComponentName.test.tsx` (or `.spec.ts`) beside the component, and cover both rendering and critical MDX transforms. Until a runner is introduced, document manual QA steps in PRs—include which routes you exercised under `bun run dev` and any viewport considerations.

## Commit & Pull Request Guidelines
Commits follow concise, sentence-case summaries in the style of “Refactor LetterPage component...”. Use the imperative mood, keep the first line under ~70 characters, and squash fixups before merging. Pull requests should describe the change, list verification steps, and link related issues. Attach before/after screenshots for visual updates and call out any content edits to files in `src/content` so reviewers can proofread.

