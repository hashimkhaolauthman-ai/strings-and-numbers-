import { test, expect } from '@playwright/test';

test('Event page loads and booking form submits', async ({ page }) => {
  await page.goto('https://event.getbookt.io/creator/Oyindamola-_15741_2381');
  await expect(page).toHaveTitle(/Oyindamola/);

  // Fill out the booking form with your login details
  await page.fill('input[name="email"]', 'tobinigerianaccount@yopmail.com');
  await page.fill('input[name="password"]', 'tobinigerianaccount@yopmail.com');

  // Click the sign in button
  await page.click('button[type="submit"]');

  // Wait for navigation or confirmation that login was successful
  await page.waitForNavigation();

  // After login, you can add steps to fill out the booking form if needed
  // Example:
  // await page.fill('input[name="name"]', 'John Doe');
  // await page.fill('input[name="phone"]', '1234567890');
  // await page.selectOption('select[name="tickets"]', '2');
  // await page.click('button[type="submit"]');

  // Wait for confirmation message or navigation
  // await expect(page.locator('.confirmation-message')).toBeVisible();
});