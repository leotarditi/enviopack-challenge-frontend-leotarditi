import { expect, test } from "@playwright/test"

test("should fail purchase when total exceeds available credit", async ({
  page,
}) => {
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

  await expect(
    page.getByRole("img", { name: "Celular LG K51s 64 GB Titanium" }),
  ).toBeVisible()
  await expect(page.getByText("Celular LG K51s 64 GB Titanium")).toBeVisible()
  await expect(page.getByText("$ 21.319,18").first()).toBeVisible()
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Celular LG K51s 64 GB Titanium" })
      .getByRole("button")
      .getByText("Agregar al carrito"),
  ).toBeVisible()
  await page
    .getByRole("listitem")
    .filter({ hasText: "Celular LG K51s 64 GB Titanium" })
    .getByRole("button")
    .click()
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Celular LG K51s 64 GB Titanium" })
      .getByRole("button")
      .getByText("Quitar del carrito"),
  ).toBeVisible()
  await expect(page.getByRole("link", { name: "Carrito (2)" })).toBeVisible()

  await expect(
    page.getByRole("img", { name: "Celular Samsung A01 Core 16GB" }),
  ).toBeVisible()
  await expect(page.getByText("Celular Samsung A01 Core 16GB")).toBeVisible()
  await expect(page.getByText("$ 15.999,00").nth(1)).toBeVisible()
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Celular Samsung A01 Core 16GB" })
      .getByRole("button")
      .getByText("Agregar al carrito"),
  ).toBeVisible()
  await page
    .getByRole("listitem")
    .filter({ hasText: "Celular Samsung A01 Core 16GB" })
    .getByRole("button")
    .click()
  await expect(
    page
      .getByRole("listitem")
      .filter({ hasText: "Celular Samsung A01 Core 16GB" })
      .getByRole("button")
      .getByText("Quitar del carrito"),
  ).toBeVisible()
  await expect(page.getByRole("link", { name: "Carrito (3)" })).toBeVisible()
  await page.getByRole("link", { name: "Carrito (3)" }).click()

  await expect(page.getByText("Crédito $ 50000+")).toBeVisible()
  await expect(
    page.getByRole("img", { name: "Celular Motorola E7 32 GB Gris" }),
  ).toBeVisible()
  await expect(page.getByText("Celular Motorola E7 32 GB Gris")).toBeVisible()
  await expect(page.getByText("$ 21.999,00")).toBeVisible()
  await expect(
    page.getByRole("img", { name: "Celular LG K51s 64 GB Titanium" }),
  ).toBeVisible()
  await expect(page.getByText("Celular LG K51s 64 GB Titanium")).toBeVisible()
  await expect(page.getByText("$ 21.319,18")).toBeVisible()
  await expect(
    page.getByRole("img", { name: "Celular Samsung A01 Core 16GB" }),
  ).toBeVisible()
  await expect(page.getByText("Celular Samsung A01 Core 16GB")).toBeVisible()
  await expect(page.getByText("$ 15.999,00")).toBeVisible()
  await expect(page.getByText("$ 59.317,18")).toBeVisible()
  await page.getByRole("button", { name: "Finalizar Compra" }).click()
  await expect(
    page.getByText(
      "Ocurrió un error con la compra. Revisá que el importe no supere el crédito disponible en tu cuenta.",
    ),
  ).toBeVisible()
  await expect(page.getByText("Crédito $ 50000+")).toBeVisible()
  await expect(page.getByRole("link", { name: "Carrito (3)" })).toBeVisible()
})
