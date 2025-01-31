import { useCredit } from "../../../hooks/useCredit";
import { useUser } from "../../../hooks/useUser";
import './NavBar.css';

function NavBar () {
  const [credit, addCredit] = useCredit();
  const user = useUser();

  return (
    <nav className="navbar">
      <div>
        <a href='/'>Tienda de Productos</a>
      </div>
      <ul>
        <li>{user.firstName} {user.lastName}</li>
        <li><a href='/carrito'>Carrito</a></li>
        <li>
          <span>Crédito $ {credit}</span>
          <button onClick={() => addCredit(1000)}>+1000</button></li>
      </ul>
    </nav>
  );
}

export default NavBar;