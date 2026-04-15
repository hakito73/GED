import { test, expect } from "@playwright/test";

test("homepage has core editorial links", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page.getByRole("heading", { name: "Excalibur Comics" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Nouveautés" })).toBeVisible();
});
