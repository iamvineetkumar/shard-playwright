import { test, expect } from '@playwright/test';

test('ten @sanity', async ({ page }) => {
  await page.goto('https://www.clari.com/');
  await page.getByRole('link', { name: 'Login ' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Pricing' }).click();
  await page.getByRole('link', { name: 'Solutions ' }).click();
  await page.getByRole('link', { name: 'Products ' }).click();
  await page.getByRole('link', { name: 'Why Clari' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('banner').getByRole('link', { name: 'See Clari in action' }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Clari', exact: true }).click();
});


test('eleven @smoke', async ({ page }) => {
  await page.goto('https://www.clari.com/');
  await page.getByRole('link', { name: 'Login ' }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Pricing' }).click();
  await page.getByRole('link', { name: 'Solutions ' }).click();
  await page.getByRole('link', { name: 'Products ' }).click();
  await page.getByRole('link', { name: 'Why Clari' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('banner').getByRole('link', { name: 'See Clari in action' }).click();
  const page1 = await page1Promise;
  await page.getByRole('link', { name: 'Clari', exact: true }).click();
});

