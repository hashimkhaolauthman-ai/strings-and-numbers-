import { test, expect } from '@playwright/test';

test('Organizer can sign in', async ({ page }) => {
  await page.goto('https://organizer.getbookt.io/sign-in');

  // Fill in credentials
  await page.fill('input[type="email"]', 'tobinigerianaccount@yopmail.com');
  await page.fill('input[type="password"]', 'tobinigerianaccount@yopmail.com');

  // Click Sign In
  await page.click('button:has-text("Sign In")');

  // Wait for navigation or error message
  await page.waitForTimeout(5000); // temporary pause for debugging
  console.log(await page.url());   // prints current URL to terminal

  // Verify successful login
  await expect(page).toHaveURL(/dashboard|events/);
});
