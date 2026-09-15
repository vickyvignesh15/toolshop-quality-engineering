import { test, expect } from "@playwright/test";

test("User can search and view a product", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.getByPlaceholder("Search").fill("Pliers");
  await page.getByRole("button", { name: "Search" }).click();
  await page.locator('[class="card"]').nth(1).click();
  const productName = await page
    .locator('[data-test="product-name"]')
    .textContent();
  const price = await page.locator('[data-test="unit-price"]').textContent();
  expect(productName?.trim()).toBe("Pliers");
  expect(price).toBe("12.01");
  expect(page.locator('[data-test="product-description"]')).toBeVisible();
});
