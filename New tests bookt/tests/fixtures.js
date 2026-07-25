import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    // Login once before each test
    await page.goto('https://staging.organizer.getbookt.io/sign-in');
    await page.fill('input[type="email"]', 'YOUR_EMAIL');
    await page.fill('input[type="password"]', 'YOUR_PASSWORD');
    await page.click('button:has-text("Sign In")');
    await page.waitForSelector('text=Create Event', { timeout: 20000 });
    await use(page);
  },
});
