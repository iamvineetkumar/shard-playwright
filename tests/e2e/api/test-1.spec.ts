import { test, expect } from '@playwright/test';

test('one @sanity', async ({ page }) => {
  await page.goto('https://www.clari.com/');
  
  // await page.getByRole('banner').getByRole('link', { name: 'See Clari in action' }).click();
  // const page1 = await page1Promise;
  // await page.getByRole('link', { name: 'Clari', exact: true }).click();
});


test('two @sanity', async ({ page }) => {
  await page.goto('https://www.clari.com/');
  
});


test('three @sanity', async ({ page }) => {
  await page.goto('https://www.clari.com/');
 
});
