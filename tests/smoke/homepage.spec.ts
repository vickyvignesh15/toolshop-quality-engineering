import { test, expect } from '@playwright/test';

test('Toolshop homepage loads successfully', async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');

    await expect(page).toHaveTitle(/Practice Software Testing/i);
});