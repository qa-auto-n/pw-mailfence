import {defineConfig, devices} from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 1,
    workers: process.env.CI ? Number.parseInt(process.env.WORKERS as string) : 1,
    reporter: [['html', {outputFolder: 'playwright-report'}]],
    use: {
        baseURL: process.env.BASE_URL as string,
        trace: process.env.CI ? 'on-first-retry' : 'on',
        screenshot: 'only-on-failure'
    },

    projects: [
        {
            name: 'chromium e2e tests',
            use: {...devices['Desktop Chrome']},
            testDir: './src/tests/e2e'
        }
    ]
});