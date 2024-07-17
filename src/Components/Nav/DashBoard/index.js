import { Link } from "react-router-dom";
import "./style.css"
function NavDashBoard() {
  return (
    <nav class="side-nav">
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

        <li><a href="#"><i class="fas fa-shopping-bag"></i> Compras</a></li>
        {/* <!-- <li><a href="#"><i class="fas fa-chart-bar"></i> Ventas</a></li> --> */}
        <li><a href="#"><i class="fas fa-user"></i> Perfil</a></li>
        <li><a href="#"><i class="fas fa-users"></i> Usuarios</a></li>
        <li><a href="#"><i class="fas fa-sign-out-alt"></i> Salir</a></li>
      </ul>
    </nav>
  );
}

export default NavDashBoard;