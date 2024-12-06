import { test, expect } from '@playwright/test';

test('four @sanity', async ({ page }) => {
  await page.goto('https://www.google.com/');
  
});


test('five @smoke', async ({ page }) => {
  await page.goto('https://www.google.com/');
  
});

