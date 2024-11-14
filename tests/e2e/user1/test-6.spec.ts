import { test, expect } from '@playwright/test';

test('ten @sanity', async ({ page }) => {
  await page.goto('https://www.msn.com/');
  
});


test('eleven @smoke', async ({ page }) => {
  await page.goto('https://www.msn.com/');
 
});

