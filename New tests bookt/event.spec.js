import { test, expect } from '@playwright/test';

test('Event page loads', async ({ page }) => {
  await page.goto('https://event-staging.getbookt.io');
  await expect(page).toHaveTitle(/Ile Iyan/);
});