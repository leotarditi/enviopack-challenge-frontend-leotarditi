import { useCart } from "../../hooks/useCart"
import Button from "../Button/Button"
import { Product } from "../Product/Product"
import "./ProductsList.css"

export function ProductsList({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className="products">
      {products.length > 0 ? (
        <ul>
          {products.map((product) => {
            const isProductInCart = checkProductInCart(product)

            return (
              <li key={product.id}>
                <Product product={product} />
                <div>
                  <Button
                    className={isProductInCart ? "remove" : ""}
                    onClick={() => {
                      isProductInCart
                        ? removeFromCart(product)
                        : addToCart(product)
                    }}
                  >
                    {isProductInCart
                      ? "Quitar del carrito"
                      : "Agregar al carrito"}
                  </Button>
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <p>No hay elementos que coincidan</p>
      )}
    </main>
  )
}
