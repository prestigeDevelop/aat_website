# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Animal Assisted Therapy (AAT) website — a small business site for an animal-assisted therapy practice in Nova Scotia, Canada. Deployed to Netlify.

## Tech Stack

- **Vue 3.5** with Options API (no Composition API, no `<script setup>`)
- **Vite 3.2** as build tool (pinned to v3 due to Node.js v14.16.0 constraint)
- **Vue Router 4** with HTML5 history mode
- **Bootstrap 5** for layout and components (plain HTML classes, NOT Bootstrap-Vue)
- **SCSS** via `sass` package for component `<style lang="scss" scoped>` blocks
- **FontAwesome 6** via `@fortawesome/vue-fontawesome` v3 — icons registered in `src/main.js`
- **vue-gtag** for Google Analytics (UA-229659621-1)
- **ESLint + Prettier** for linting/formatting

## Commands

```bash
npm run dev      # Start dev server (port 8080, auto-opens browser)
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint with auto-fix on src/**/*.{vue,js}
```

## Architecture

**Entry flow:** `index.html` → `src/main.js` → `App.vue` (Header + `<router-view>` + Footer)

**Routing:** `src/router/index.js` — Home is eagerly loaded; all other views are lazy-loaded. Routes:
`/`, `/about`, `/aat`, `/services`, `/contact`, `/gallery`, `/blog`, `/humanAnimalInteractions`, `/understandingAnxietyDisorders`

**Layout:** `App.vue` wraps every page with `Header` and `Footer` components. The `Home` view embeds the `Contact` component directly for an inline contact form.

**Path alias:** `@` maps to `src/` (configured in `vite.config.js`)

**Styling conventions:**
- Brand gold color: `#94821b`
- Heading font: `lulo-clean-w01-one-bold`
- Body font: `avenir-lt-w01_35-light1475496`
- Global heading styles (`h1`, `h2`, `h5`) defined in `App.vue`
- Bootstrap imported globally in `main.js` (both CSS and JS bundle)

## Key Constraints

- **Node.js v14.16.0** — cannot upgrade Vite beyond v3 or use packages requiring Node 18+
- **ESM project** — `package.json` has `"type": "module"`. Config files that need CommonJS (like `.eslintrc.js`) use the `.js` extension workaround
- Sass legacy JS API deprecation warnings are cosmetic and expected until Node is upgraded
