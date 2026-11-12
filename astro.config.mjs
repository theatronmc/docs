// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Theatron Docs',
      description: 'Documentation for creating and running Minecraft worlds with Theatron.',
      logo: { src: './src/assets/theatron-mark.png', alt: 'Theatron' },
      favicon: '/favicon.png',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/theatronmc' },
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/theatronmc' },
      ],
      editLink: { baseUrl: 'https://github.com/theatronmc/docs/edit/main/' },
      sidebar: [
        { label: 'Overview', items: [{ slug: 'project-status' }] },
        { label: 'Documentation', items: [{ slug: 'editing-docs' }] },
      ],
    }),
  ],
});
