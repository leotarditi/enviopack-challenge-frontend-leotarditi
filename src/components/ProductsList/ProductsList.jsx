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
      <ul>
        {products.map((product, index) => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={index}>
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
    </main>
  )
}
