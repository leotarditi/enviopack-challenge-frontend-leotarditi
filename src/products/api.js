import { products } from "./products.json"

export default {
  list: () =>
    new Promise((resolve) => setTimeout(() => resolve({ products }), 1000)),
}
