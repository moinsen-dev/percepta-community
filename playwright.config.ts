import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4321', trace: 'retain-on-failure' },
  webServer: [{
    command: 'node tests/github-mock.mjs',
    url: 'http://127.0.0.1:4323/health',
    reuseExistingServer: false,
    timeout: 10_000,
  }, {
    command: 'npx wrangler dev --local --ip 127.0.0.1 --port 4321 --inspector-port 9231 --var PEOPLE_OPEN:false',
    url: 'http://127.0.0.1:4321',
    reuseExistingServer: false,
    timeout: 60_000,
  }, {
    command: 'npx wrangler d1 migrations apply percepta-experiences --local --persist-to .wrangler/intake-test && npx wrangler dev --local --ip 127.0.0.1 --port 4322 --inspector-port 9232 --persist-to .wrangler/intake-test --var INTAKE_OPEN:true --var STORIES_OPEN:true --var GITHUB_API_URL:http://127.0.0.1:4323 --var GITHUB_TOKEN:test-token --var PEOPLE_OPEN:true --var ADMIN_TOKEN:test-admin',
    url: 'http://127.0.0.1:4322',
    reuseExistingServer: false,
    timeout: 60_000,
  }],
});
