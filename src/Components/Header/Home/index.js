import { NavLink } from "react-router-dom";
import "./style.css"

function HeaderHome() {
  return <header className="header">
    <div class="header-top">
      <div class="logo-container">
        <img src="img/home/delivery-truck-1.svg" alt="Logo Delivery" />
        <p>Tu productos en casa en sólo 24 - 48 horas</p>
      </div>
      <div class="info-container">
        <div class="info-item">
          <img src="img/home/telefono-1.svg" alt="Icono telefono-1" />
          <p>626 405 143</p>
        </div>
        <div class="info-item">
          <img src="img/home/whatsapp-41.svg" alt="Icono whatsapp-41" />
          <p>626 405 143</p>
        </div>
        <div class="info-item">
          <img src="img/home/reloj-de-pared-1.svg" alt="Icono reloj-de-pared-1" />
          <p>L-J: 9-14h / 17-20h | V: 8-14h</p>
        </div>
      </div>
    </div>
    {/* <!-- Aquí irá la segunda parte del encabezado --> */}

    <div class="header-bottom">
      <div class="logo-container">
        <img src="img/home/brand-brand-logo-symbol-2-x.svg" alt="Logo Página" />
        <h1>MediGood</h1>
      </div>
      <div class="search-container">
        <input type="text" placeholder="¡Busca entre más de 12.000 productos!" />
        <img src="img/home/loupe-1.svg" alt="Buscar" />
      </div>
        <nav class="nav-container">
          <div class="nav-item">
            <div class="basket-container">
              <img src="img/home/cart-1.svg" alt="Cesta" />
              <span>2</span> {/* <!-- Actualiza este número según los items en la cesta --> */}
            </div>
            <a href="">Mi cesta</a>
          </div>
          <div class="nav-item">
            <img src="img/home/usuario-1.svg" alt="Sesión" />
            <NavLink to={"/login"}>
              Iniciar sesión
            </NavLink>
          </div>
        </nav>
    </div>
  </header>
}

export default HeaderHome;