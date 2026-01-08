import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'DesignSystem',
      fileName: (format) => `design-system.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
