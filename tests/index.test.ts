import { test, expect } from '@playwright/test';

test.describe('Go to the starting url before each test', () => {
  test.beforeEach(async ({ page }) => await page.goto('https://rabie-menad-links.vercel.app/'));

  test('has title', async ({ page }) => await expect(page).toHaveTitle(/Rabie Menad • Links/));

  test('Check user informations', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Menad Rabie' })).toBeVisible();
    await expect(page.getByRole('img', { name: 'avatar' })).toBeVisible();
  });

  test('Check user links', async ({ page }) => {
    await expect(page.getByRole('heading', { level: 2, name: 'Site personnel' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'Linkedin' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: 'FrontEndMentor' })).toBeVisible();
  });

  test('Check footer images', async ({ page }) => {
    await expect(page.getByAltText('Instagram')).toBeVisible();
    await expect(page.getByAltText('Github')).toBeVisible();
    await expect(page.getByAltText('Discord')).toBeVisible();
  });

  // test('Check user links', async ({ page }) => {
  //   await page.goto('https://www.linkedin.com/in/rabie-menad/?original_referer=');
  //   await page.goto('https://www.frontendmentor.io/profile/mena0018');
  //   await page.goto('https://www.instagram.com/crocop_09/');
  //   await page.goto('https://github.com/mena0018');
  //   await page.goto('https://discord.com/channels/@me');
  //   await page.goto('https://discord.com/login?redirect_to=%2Fchannels%2F%40me');
  // });
});
