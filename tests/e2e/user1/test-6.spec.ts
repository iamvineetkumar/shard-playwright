import { test, expect } from '@playwright/test';

test('ten @sanity', async ({ page }) => {
  await page.goto('https://www.msn.com/');
  
});



test('get started link @sanity', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started990099' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation345' })).toBeVisible();
});

