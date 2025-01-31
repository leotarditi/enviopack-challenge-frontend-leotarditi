import { useCart } from "../../../hooks/useCart"
import { useCredit } from "../../../hooks/useCredit"
import { useUser } from "../../../hooks/useUser"
import "./NavBar.css"

function NavBar() {
  const [credit, addCredit] = useCredit()
  const { cart } = useCart()
  const user = useUser()

  return (
    <nav className="navbar">
      <div>
        <a href="/">Tienda de Productos</a>
      </div>
      <ul>
        <li>
          {user.firstName} {user.lastName}
        </li>
        <li className="cart">
          <a href="/carrito">Carrito ({cart.length})</a>
        </li>
        <li>
          <span>Crédito $ {credit}</span>
          <button onClick={() => addCredit(1000)}>+1000</button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
