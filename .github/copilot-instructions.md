# Copilot Instructions for CountApp-TypeScript-React

This repository is a minimal Vite‑based React + TypeScript project scaffolded from the official template. The UI is currently a simple counter; there is no backend, database, or state management library. Agents should treat it as a frontend‑only example with strict TypeScript settings.

## Architecture overview

* **Frontend only.** All source code lives in `src/`. There are no server files or API routes.
* **Entry point**: `src/main.tsx` uses `createRoot` and renders the `<App />` component inside a `StrictMode` wrapper.
* **Primary component**: `src/App.tsx`. Additional UI pieces should be created as separate `.tsx` modules and imported from here or from other components.
* **Styling**: plain CSS files reside next to components (`src/App.css`, `src/index.css`). Static assets such as images live in `src/assets` and are imported like modules (see the logo imports in `App.tsx`).
* **Public assets**: anything under `public/` is served unchanged at the root of the built site.

## Key files & directories

| Path | Purpose |
|------|---------|
| `package.json` | scripts (`dev`, `build`, `preview`, `lint`) and dependency list. |
| `vite.config.ts` | Vite configuration; currently only includes `@vitejs/plugin-react`. Add extra plugins here and install them with npm. |
| `tsconfig.app.json` | TypeScript compiler options for the app code (`src`). Strict mode is enabled. |
| `tsconfig.node.json` | Compiler options for Node tooling (used by `vite.config.ts`). Keep this up to date when editing the config. |
| `eslint.config.js` | ESLint setup for linting and formatting. Run `npm run lint`. |

## Developer workflows

1. **Initial setup:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm run dev      # launches Vite dev server, HMR & fast-refresh enabled
   ```
   Open `http://localhost:5173` in the browser by default.
3. **Build for production:**
   ```bash
   npm run build    # compiles TypeScript (`tsc -b`) then runs `vite build`
   npm run preview  # serve the contents of `dist/` locally
   ```
* Use **ESM imports** only. `package.json` has "type": "module"; mixing CommonJS will break the build.
* Functional components only; hooks are the default pattern (see `App.tsx` for examples).
* The TypeScript configuration is very strict (`strict`, `noUnusedLocals`, `noUncheckedSideEffectImports`, etc.). Fix any compiler errors before running `npm run build`.
* `src` code is intended for browser runtime; any Node-specific code (tools, config) lives in separate files covered by `tsconfig.node.json`.
* Asset imports (SVG, etc.) can be imported directly: `import logo from './assets/react.svg'`.
   ```bash
   npm run lint     # runs eslint over the repo
* **New components** — drop a `.tsx` file under `src/`, export it (default or named) and import it from `App.tsx` or another component. Keep CSS alongside or in a global stylesheet.
* **Routing or state** — none are present; add libraries like `react-router` or `zustand` as needed and update `package.json`.
* **Tests** — this template has no test runner. If you introduce one (Vitest, Jest, etc.), add dev dependencies and put tests next to the code (`src/__tests__` or `Component.test.tsx`).
* **Vite plugins** — modify `vite.config.ts`. Remember to update `tsconfig.node.json` if the new plugin code is written in TypeScript.

* Use **ESM imports** only. `package.json` has `
* Focus on editing files under `src/` and adjusting the Vite config when necessary. The rest of the repository is build tooling.
* Don’t introduce backend patterns; treat the app as a static SPA.
* Respect the strict TypeScript settings; many eslint rules are tied to the tsconfig, so type errors often double as lint failures.
* When adding assets, import them from `src/assets` or place them in `public/` if they should remain unprocessed.
* Example patterns you can reuse:
   ```tsx
   import reactLogo from './assets/react.svg';
   const [count, setCount] = useState(0);
   <button onClick={() => setCount(c => c + 1)}>count is {count}</button>
   ```

Update this file if you discover new project-specific conventions or once tests/frameworks are added. It should remain concise (20–50 lines) and focused on what a newcomer needs to hit the ground running.