import { NavLink } from "react-router-dom"
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
        <NavLink to="/">Tienda de Productos</NavLink>
      </div>
      <ul>
        <li>
          {user.firstName} {user.lastName}
        </li>
        <li className="cart-link">
          <NavLink to="/cart">Carrito ({cart.length})</NavLink>
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
