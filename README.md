# Theatron documentation

This repository is the source for Theatron's documentation site, built with [Astro Starlight](https://starlight.astro.build/). It covers the product, self-hosting, world authoring, extensions, operations, and contributing as those paths become ready.

**Release status:** The public product code, self-host installation, plugin binaries, and license are still in preparation. This site is a working documentation scaffold, not an install guide or a published support promise. It is not deployed yet.

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
- `src/assets/theatron-mark.png` — an exact crop of the original Theatron mark from the core workspace, used in the site header. `public/favicon.png` is a resized copy of that crop.

Before adding operational instructions, verify every command against a released core version. State the tested version and target platform; clearly label design plans as plans. The core repository owns executable examples and API contracts. Documentation may explain them and link to versioned source, but should not maintain a second copy that can drift.

The long-term destination for the site and its deployment workflow will be configured when the documentation is ready to publish. The documentation content license is still undecided; this repository does not grant a product or brand license.

## Related repositories

- [Core](https://github.com/theatronmc/theatron)
- [Launcher](https://github.com/theatronmc/launcher)
- [Extension template](https://github.com/theatronmc/extension-template)
- [Extension registry](https://github.com/theatronmc/extension-registry)
