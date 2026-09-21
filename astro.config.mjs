import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.pracafe.ind.br',
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // Windows: o watcher pode tentar ler arquivos de sistema na raiz do drive (EBUSY) e derrubar o dev server.
    server: { watch: { ignored: ['**/DumpStack.log.tmp', '**/hiberfil.sys', '**/pagefile.sys', '**/swapfile.sys', '**/node_modules/**', '**/dist/**'] } },
  },
  build: { inlineStylesheets: 'auto' },
});
