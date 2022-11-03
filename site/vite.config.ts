import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import { macaronVitePlugin } from '@macaron-css/vite';

export default defineConfig({
  plugins: [
    {
      ...(await import('@mdx-js/rollup')).default({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }),
      enforce: 'pre',
    },
    macaronVitePlugin(),
    solid({
      extensions: ['.mdx', '.md'],
    }),
  ],
});
