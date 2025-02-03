import { NavLink } from "react-router-dom"
import { useCart } from "../../../hooks/useCart"
import { useCredit } from "../../../hooks/useCredit"
import { useUser } from "../../../hooks/useUser"
import "./NavBar.css"
import Button from "../../Button/Button"

function NavBar() {
  const { credit, addCredit } = useCredit()
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
          <Button onClick={() => addCredit(1000)} className='secondary'>+1000</Button>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
