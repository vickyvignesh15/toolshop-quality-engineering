import { test, expect } from "@playwright/test";

test("User can search and view a product", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.getByPlaceholder("Search").fill("Pliers");
  await page.getByRole("button", { name: "Search" }).click();
  await page
    .locator('[data-test="product-name"]')
    .getByText(" Pliers ", { exact: true })
    .click();
  const productName = page.locator('[data-test="product-name"]');
  const price = page.locator('[data-test="unit-price"]');
  const productDescription = page.locator('[data-test="product-description"]');
  await expect(productName).toHaveText("Pliers");
  await expect(price).toHaveText("12.01");
  await expect(productDescription).toBeVisible();
});
