import api from "../products/api"

const delay = async (ms) =>
  await new Promise((resolve) => setTimeout(resolve, ms))

export const fetchProducts = async ({ pageParam = 1 }) => {
  await delay(300)

  return await api.list(pageParam).then(({ products }) => {
    const nextCursor = pageParam >= 3 ? undefined : pageParam + 1

    return {
      products: products,
      nextCursor,
    }
  })
}
