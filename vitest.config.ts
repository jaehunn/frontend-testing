import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    include: ['**/*.test.?(c|m)[jt]s?(x)'],

    alias: [
      {
        find: '~',
        replacement: path.resolve(__dirname, 'src'),
      },
    ],
  },
});
