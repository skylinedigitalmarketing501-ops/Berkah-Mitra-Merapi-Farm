import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';

function preloadDisplayHeadingFont(): Plugin {
  return {
    name: 'bmmf-preload-display-font',
    transformIndexHtml(html, ctx) {
      if (!ctx.bundle) return html;
      const targetFont = Object.keys(ctx.bundle).find(
        (fileName) =>
          fileName.includes('plus-jakarta-sans-latin-700-normal') &&
          fileName.endsWith('.woff2')
      );
      if (!targetFont) return html;
      const preloadTag = `    <link rel="preload" as="font" type="font/woff2" crossorigin href="/${targetFont}" />\n`;
      return html.replace('  </head>', `${preloadTag}  </head>`);
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), preloadDisplayHeadingFont()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    build: {
      sourcemap: true,
      rolldownOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/') ||
              id.includes('node_modules/react-router')
            ) {
              return 'react-vendor';
            }
            if (
              id.includes('node_modules/motion') ||
              id.includes('node_modules/framer-motion')
            ) {
              return 'motion-vendor';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
