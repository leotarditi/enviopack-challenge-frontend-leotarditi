import { expect, test } from "@playwright/test"

test("should filter products by price ascendent", async ({ page }) => {
  await page.goto("https://enviopack-challenge-frontend-leotardi.netlify.app/")

  await page.getByLabel("Ordenar por").selectOption("priceAsc")
  const list = await page.locator(".products").first().textContent()
  const pricesText = list?.match(/\$\s?\d{1,3}(?:\.\d{3})*,\d{2}/g)
  const prices = pricesText?.map((price) => {
    return parseFloat(
      price.replace("$", "").replace(/\./g, "").replace(",", "."),
    )
  })

  prices?.forEach((p, i) => {
    expect(p).toBeLessThanOrEqual(prices[i + 1] || Infinity)
  })
})

test("should filter products by price descendent", async ({ page }) => {
  await page.goto("https://enviopack-challenge-frontend-leotardi.netlify.app/")

  await page.getByLabel("Ordenar por").selectOption("priceDesc")
  const list = await page.locator(".products").first().textContent()
  const pricesText = list?.match(/\$\s?\d{1,3}(?:\.\d{3})*,\d{2}/g)
  const prices = pricesText?.map((price) => {
    return parseFloat(
      price.replace("$", "").replace(/\./g, "").replace(",", "."),
    )
  })

  prices?.forEach((p, i) => {
    expect(p).toBeGreaterThanOrEqual(prices[i + 1] || -1)
  })
})

test("should work all filters together", async ({ page }) => {
  await page.goto("https://enviopack-challenge-frontend-leotardi.netlify.app/")

  /* Sorted by priceAsc */
  await page.getByLabel("Ordenar por").selectOption("priceAsc")

  let list = await page.locator(".products").first().textContent()
  let pricesText = list?.match(/\$\s?\d{1,3}(?:\.\d{3})*,\d{2}/g)
  let prices = pricesText?.map((price) => {
    return parseFloat(
      price.replace("$", "").replace(/\./g, "").replace(",", "."),
    )
  })

  prices?.forEach((p, i) => {
    expect(p).toBeLessThanOrEqual(prices[i + 1] || Infinity)
  })

  /* Filter by query motorola */
  await page
    .getByRole("textbox", { name: "Buscar productos por nombre" })
    .fill("motorola")
  let listMotorola = await page.locator(".products").first().textContent()
  let titlesMotorola = listMotorola?.match(/Celular.*?(?=\$)/g)

  let titles = list?.match(/Celular.*?(?=\$)/g)
  let filteredTitles = titles?.filter((title) =>
    title.toLowerCase().includes("motorola"),
  )

  expect(titlesMotorola).toEqual(filteredTitles)
  pricesText = listMotorola?.match(/\$\s?\d{1,3}(?:\.\d{3})*,\d{2}/g)
  prices = pricesText?.map((price) => {
    return parseFloat(
      price.replace("$", "").replace(/\./g, "").replace(",", "."),
    )
  })
  prices?.forEach((p, i) => {
    expect(p).toBeLessThanOrEqual(prices[i + 1] || Infinity)
  })

  /* Sorted by priceAsc */
  await page.getByLabel("Ordenar por").selectOption("priceDesc")
  listMotorola = await page.locator(".products").first().textContent()
  pricesText = listMotorola?.match(/\$\s?\d{1,3}(?:\.\d{3})*,\d{2}/g)
  prices = pricesText?.map((price) => {
    return parseFloat(
      price.replace("$", "").replace(/\./g, "").replace(",", "."),
    )
  })

  prices?.forEach((p, i) => {
    expect(p).toBeGreaterThanOrEqual(prices[i + 1] || -1)
  })

  expect(titlesMotorola).toEqual(filteredTitles)

  /* Remove query motorola */
  await page
    .getByRole("textbox", { name: "Buscar productos por nombre" })
    .fill("")
  list = await page.locator(".products").first().textContent()
  pricesText = list?.match(/\$\s?\d{1,3}(?:\.\d{3})*,\d{2}/g)
  prices = pricesText?.map((price) => {
    return parseFloat(
      price.replace("$", "").replace(/\./g, "").replace(",", "."),
    )
  })

  prices?.forEach((p, i) => {
    expect(p).toBeGreaterThanOrEqual(prices[i + 1] || -Infinity)
  })
})
