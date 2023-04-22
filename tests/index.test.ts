import { test, expect } from '@playwright/test';

test.describe('Go to the starting url before each test', () => {
  test.beforeEach(async ({ page }) => await page.goto('https://rabie-menad-links.vercel.app/'));

  test('has title', async ({ page }) => await expect(page).toHaveTitle(/Rabie Menad • Links/));

  test('Check user informations', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Rabie Menad' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'avatar' })).toBeVisible();
  });

  test('Check user links', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Portfolio' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'LinkedIn' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Freelancing' })).toBeVisible();
  });

  test('Check footer images', async ({ page }) => {
    await expect(page.getByAltText('Twitter')).toBeVisible();
    await expect(page.getByAltText('Github')).toBeVisible();
    await expect(page.getByAltText('Discord')).toBeVisible();
  });
});
