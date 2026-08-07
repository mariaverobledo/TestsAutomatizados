import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  fullyParallel: false,
  workers: 1,
  reporter: [['html', { open: 'always' }]],
  use: {
    headless: false,
    screenshot: 'on',
  },
});