import { useCart } from "../../hooks/useCart"
import "./Products.css"

export function Products({ products }) {
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
                <img
                  src="/assets/images/image-product.jpg"
                  alt={product.title}
                />
                <div>
                  <strong>{product.title}</strong>
                  <p>{product.price}</p>
                </div>
                <div>
                  <button
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
                  </button>
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
