import { test, expect } from '@playwright/test';

test('one @sanity', async ({ page }) => {
  await page.goto('https://www.google.com/');
  
});


