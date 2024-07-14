import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./style.css"

function HeaderHome() {

  const [searchValue, setSearchValue] = useState("")

  // para redireccionar hook 
  const navigator = useNavigate();

  return <header className="header">
    <div className="header-top">
      <div className="logo-container">
        <img src="img/home/delivery-truck-1.svg" alt="Logo Delivery" />
        <p>Tu productos en casa en sólo 24 - 48 horas</p>
      </div>
      <div className="info-container">
        <div className="info-item">
          <img src="img/home/telefono-1.svg" alt="Icono telefono-1" />
          <p>626 405 143</p>
        </div>
        <div className="info-item">
          <img src="img/home/whatsapp-41.svg" alt="Icono whatsapp-41" />
          <p>626 405 143</p>
        </div>
        <div className="info-item">
          <img src="img/home/reloj-de-pared-1.svg" alt="Icono reloj-de-pared-1" />
          <p>L-J: 9-14h / 17-20h | V: 8-14h</p>
        </div>
      </div>
    </div>
    {/* <!-- Aquí irá la segunda parte del encabezado --> */}

    <div className="header-bottom">
      <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
        <div className="logo-container">
          <img src="img/home/brand-brand-logo-symbol-2-x.svg" alt="Logo Página" />
          <h1>MediGood</h1>
        </div>
      </Link>
      <div className="search-container" >
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="¡Busca entre más de 12.000 productos!" />
        <img src="img/home/loupe-1.svg" alt="Buscar" onClick={() => navigator(`/search/${searchValue}`)}
        />
      </div>
      <nav className="nav-container">
        <div className="nav-item">
          <div className="basket-container">
            <img src="img/home/cart-1.svg" alt="Cesta" />
            <span>2</span> {/* <!-- Actualiza este número según los items en la cesta --> */}
          </div>
          <Link to={"/"}>
            Mi cesta
          </Link>
        </div>
        <div className="nav-item">
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