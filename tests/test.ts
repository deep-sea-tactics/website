import { expect, test } from '@playwright/test';

test('index page has navbar', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('navigation')).toBeVisible();
});

test('index page has banner with header', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('banner')).toBeVisible();
	await expect(page.getByRole('heading', { name: "Landstown High School's innovative underwater robotics team." })).toBeVisible();
});
