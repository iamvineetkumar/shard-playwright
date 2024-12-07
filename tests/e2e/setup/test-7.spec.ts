import { test, expect } from '@playwright/test';

test('six @smoke', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log(" >>>>>>>1")
 
});



test('get started link @smoke', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log(">>>>>>>>>>2")

  // Click the get started link.
  //await page.getByRole('link', { name: 'Get started9888988888' }).click();

  // Expects page to have a heading with the name of Installation.
 // await expect(page.getByRole('heading', { name: 'Installation123312321' })).toBeVisible();
});



test('get started 1link @smoke', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  console.log(">>>>>>>>>>3")

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started9888988888' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation123312321' })).toBeVisible();
});


