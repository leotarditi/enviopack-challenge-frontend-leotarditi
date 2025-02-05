import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { useCredit } from "../../hooks/useCredit"
import "./Cart.css"
import Button from "../Button/Button"
import { Product } from "../Product/Product"

export function Cart() {
  const navigate = useNavigate()
  const { removeFromCart, cart, clearCart } = useCart()
  const { credit, removeCredit } = useCredit()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (total <= credit) {
      removeCredit(total)
      clearCart()
      navigate("/purchase-status?status=success")
    } else {
      navigate("/purchase-status?status=error")
    }
  }

  return (
    <main className="cart">
      {cart.length > 0 ? (
        <>
          <div className="cart-table">
              {cart.map((product) => {
                return (
                  <div className="row" key={product.id}>
                    <Product product={product} />
                    <Button
                      className="remove small"
                      onClick={() => {
                        removeFromCart(product)
                      }}
                    >
                      X
                    </Button>
                  </div>
                )
              })}
          </div>
          <div className="cart-total">
            <span>Total:</span>
            <span>
              {total.toLocaleString("es-ar", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 2,
              })}
            </span>
          </div>
          <div className="cart-buttons">
            <Button onClick={() => navigate("/")}>Volver al Catálogo</Button>
            <Button onClick={handleCheckout}>Finalizar Compra</Button>
          </div>
        </>
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
    </main>
  )
}
