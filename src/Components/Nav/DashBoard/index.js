import "./style.css"
function NavDashBoard() {
  return (
    <nav class="side-nav">
        <ul>
          <li><a href="#"><i class="fas fa-shopping-cart"></i> Pedidos</a></li>
          <li><a href="#"><i class="fas fa-box"></i> Inventario</a></li>

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