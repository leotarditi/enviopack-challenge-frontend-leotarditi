import { test, expect } from '@playwright/test';

test('should adjust purchase to fit within available credit by removing an item', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  await page.getByRole('button', { name: 'Agregar al carrito', exact: true }).nth(0).click();
  await page.getByRole('button', { name: 'Agregar al carrito', exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Agregar al carrito', exact: true }).nth(2).click();

  await expect(page.getByRole('link', { name: 'Carrito (3)' })).toBeVisible();
  await page.getByRole('link', { name: 'Carrito (3)' }).click();

  await expect(page.getByText('Crédito $ 50000+')).toBeVisible();
  await expect(page.getByText("$ 91.997,00")).toBeVisible()
  await page.getByRole("button", { name: "Finalizar Compra" }).click()
  await expect(page.getByText('Ocurrió un error con la compra. Revisá que el importe no supere el crédito disponible en tu cuenta.')).toBeVisible();

  await expect(page.getByRole('link', { name: 'Carrito (3)' })).toBeVisible();
  await page.getByRole('link', { name: 'Carrito (3)' }).click();
  
  await page.getByRole('button', { name: 'X' }).nth(2).click();
  await expect(page.getByRole('link', { name: 'Carrito (2)' })).toBeVisible();

  await expect(page.getByText('Crédito $ 50000+')).toBeVisible();
  await expect(page.getByText("$ 41.998,00")).toBeVisible()
  await page.getByRole('button', { name: 'Finalizar Compra' }).click();

  await expect(page.getByText("Crédito $ 8002+")).toBeVisible()
  await expect(page.getByText("La compra se realizó con éxito")).toBeVisible()
});