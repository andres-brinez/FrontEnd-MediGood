import { Link } from "react-router-dom";
import "./style.css"
function NavDashBoard() {
  return (
    <nav className="side-nav">
      <ul>
        <li>
          <Link to="/dashboard/orders">
            <i className="fas fa-shopping-cart"></i> Pedidos
          </Link>
        </li>
        <li>
          <Link to="/dashboard/inventory">
            <i className="fas fa-box"></i> Inventario
          </Link>
        </li>
        <li>
          <Link to="/dashboard/buys">
            <i className="fas fa-shopping-bag"></i> Compras
          </Link>
        </li>
        <li>
          <Link to="/dashboard/profile">
            <i className="fas fa-user"></i> Perfil
          </Link>
        </li>
        <li>
          <Link to="/dashboard/users">
            <i className="fas fa-users"></i> Usuarios
          </Link>
        </li>

        {/* <li><a href="#"><i className="fas fa-sign-out-alt"></i> Salir</a></li> */}
      </ul>
    </nav>
  );
}

export default NavDashBoard;