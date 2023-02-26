import { expect, test } from '@playwright/test';

test('index page has navbar', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('navigation')).toBeVisible();
});
