import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart"
import { useCredit } from "../../hooks/useCredit";
import "./Cart.css"
import Button from "../Button/Button";

export function Cart() {
  const navigate = useNavigate();
  const { removeFromCart, cart, clearCart } = useCart()
  const { credit, removeCredit } = useCredit()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  const handleCheckout = () => {
    if (total <= credit) {
      removeCredit(total);
      clearCart();
      navigate('/purchase-status?status=success');
    } else {
      navigate('/purchase-status?status=error');
    }
  };

  return (
    <main className="cart">
      {cart.length > 0 ? (
        <>
          <table className="cart-table">
            <tbody>
              {cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <img
                        src="/assets/images/image-product.jpg"
                        alt={product.title}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>
                      {product.price.toLocaleString("es-ar", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 2,
                      })}
                    </td>
                    <td>
                      <Button
                        className="remove small"
                        onClick={() => {
                          removeFromCart(product)
                        }}
                      >
                        X
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
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
            <Button onClick={() => navigate('/')}>Volver al Catálogo</Button>
            <Button onClick={handleCheckout}>Finalizar Compra</Button>
          </div>
        </>
      ) : (
        <p>No hay elementos en el carrito</p>
      )}
    </main>
  )
}
