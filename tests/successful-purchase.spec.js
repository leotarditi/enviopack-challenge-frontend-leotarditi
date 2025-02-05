import { expect, test } from "@playwright/test"

test("should complete the purchase successfully", async ({ page }) => {
  await page.goto("https://enviopack-challenge-frontend-leotardi.netlify.app/")
  await expect(page.getByRole("heading")).toHaveText("Loading...")

  /* Home page */
  await expect(page.getByRole("heading")).toHaveText("Catálogo")
  await expect(
    page.getByRole("textbox", { name: "Buscar productos por nombre" }),
  ).toBeVisible()
  await expect(
    page.getByRole("img", { name: "Celular Motorola E7 32 GB Gris" }),
  ).toBeVisible()
  await expect(page.getByText("Celular Motorola E7 32 GB Gris")).toBeVisible()
  await expect(page.getByText("$ 21.999,00").first()).toBeVisible()
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Celular Motorola E7 32 GB" })
      .getByRole("button")
      .getByText("Agregar al carrito"),
  ).toBeVisible()
  await expect(page.getByRole("link", { name: "Carrito (0)" })).toBeVisible()
  await page
    .getByRole("listitem")
    .filter({ hasText: "Celular Motorola E7 32 GB" })
    .getByRole("button")
    .click()
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Celular Motorola E7 32 GB" })
      .getByRole("button")
      .getByText("Quitar del carrito"),
  ).toBeVisible()
  await expect(page.getByRole("link", { name: "Carrito (1)" })).toBeVisible()
  await page.getByRole("link", { name: "Carrito (1)" }).click()

  /* Cart page */
  await expect(
    page.getByRole("img", { name: "Celular Motorola E7 32 GB Gris" }),
  ).toBeVisible()
  await expect(page.getByText("Celular Motorola E7 32 GB Gris")).toBeVisible()
  await expect(
    page.getByRole("paragraph").filter({ hasText: "$ 21.999,00" }),
  ).toBeVisible()
  await expect(
    page.locator("span").filter({ hasText: "$ 21.999,00" }),
  ).toBeVisible()
  await expect(
    page.getByRole("button", { name: "Finalizar Compra" }),
  ).toBeVisible()
  await expect(page.getByText("Crédito $ 50000+")).toBeVisible()
  await page.getByRole("button", { name: "Finalizar Compra" }).click()

  /* Purchase page */
  await expect(page.getByText("Crédito $ 28001+")).toBeVisible()
  await expect(page.getByText("La compra se realizó con éxito")).toBeVisible()
})
