# Theatron documentation

This repository contains Theatron's documentation site, built with [Astro Starlight](https://starlight.astro.build/). It covers the product, self-hosting, world authoring, extensions, operations, and contributing.

> **Availability:** The site source builds locally but is not deployed. Self-host installation instructions are not available yet.

## Run locally

Use Node.js 24 and npm:

```sh
npm ci
npm run dev
```

The local address is printed by Astro. Run `npm run build` to check the static output in `dist/`.

## Where content lives

- `src/content/docs/` — documentation pages in Markdown or MDX.
- `astro.config.mjs` — Starlight navigation, branding, and social links.
- `src/assets/theatron-mark.png` — the original Theatron mark used in the site header. `public/favicon.png` is its favicon.

The [core repository](https://github.com/theatronmc/theatron) holds the application and versioned contracts. Documentation here describes those interfaces and links to their source.

## Related repositories

- [Core](https://github.com/theatronmc/theatron)
- [Launcher](https://github.com/theatronmc/launcher)
- [Relay](https://github.com/theatronmc/relay)
- [Extension template](https://github.com/theatronmc/extension-template)
- [Extension registry](https://github.com/theatronmc/extension-registry)
