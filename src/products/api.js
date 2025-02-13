import { products } from "./products.json"

export default {
  list: (page) =>
    new Promise((resolve) =>
      resolve({ products: products.slice((page - 1) * 6, page * 6) }),
    ),
}
