---
title: Editing these docs
description: Where documentation lives and how to check changes locally.
---

Documentation pages live in `src/content/docs/`. The navigation is configured in `astro.config.mjs`. Starlight supports Markdown and MDX, so most changes need no application code.

Use Node.js 24 and npm to preview a change:

```sh
npm ci
npm run dev
```

Before opening a pull request, run `npm run build` and check the affected page in a browser. Keep instructions tied to a tested Theatron release and name the version and Minecraft target when compatibility matters. Mark proposed behavior as proposed. If a guide relies on a command or API contract from the core, link to the versioned source rather than copying an unverified example.

The content license and contribution policy for this repository will be finalized before a public documentation contribution program begins. You can report a documentation problem in [GitHub Issues](https://github.com/theatronmc/docs/issues).
