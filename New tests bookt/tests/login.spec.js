import { test, expect } from '@playwright/test';

test('Organizer login, create event, add ticket, and poll', async ({ page }) => {
  // Login
  await page.goto('https://staging.organizer.getbookt.io/sign-in');
  await page.fill('input[type="email"]', 'tobinigerianaccount@yopmail.com');
  await page.fill('input[type="password"]', 'tobinigerianaccount@yopmail.com');
  await page.click('button:has-text("Sign In")');
  await page.waitForSelector('text=Create Event', { timeout: 20000 });
  await expect(page).toHaveURL(/getbookt\.io/);

  // Create Event
  await page.click('text=Create Event');
  await page.fill('input[name="eventName"]', 'Playwright Automation Test Event');
  await page.fill('textarea[name="description"]', 'This event was created automatically using Playwright.');
  await Promise.all([
    page.waitForSelector('text=Event created successfully', { timeout: 10000 }),
    page.click('button:has-text("Save")'),
  ]);
  await expect(page.locator('text=Event created successfully')).toBeVisible();

  // Add Ticket
  await page.click('text=Add Ticket');
  await page.fill('input[name="ticketName"]', 'VIP Ticket');
  await page.fill('input[name="ticketPrice"]', '5000');
  await page.click('button:has-text("Save Ticket")');
  await expect(page.locator('text=Ticket created successfully')).toBeVisible();

  // Create Poll
  await page.click('text=Create Poll');
  await page.fill('input[name="pollQuestion"]', 'Did you enjoy the event?');
  await page.fill('input[name="option1"]', 'Yes');
  await page.fill('input[name="option2"]', 'No');
  await page.click('button:has-text("Save Poll")');
  await expect(page.locator('text=Poll created successfully')).toBeVisible();
});
