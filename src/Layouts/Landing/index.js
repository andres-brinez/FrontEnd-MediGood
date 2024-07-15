import HeaderHome from "../../Components/Header/Home";
import productsJson from "../../services/Products.json";
import SliderProducts from "../../Components/SliderProducts";
import Categories from "../../Components/Categories";
import FooterHome from "../../Components/Footer/Home";
import { useState } from "react";
import { Outlet } from 'react-router-dom';
import "./style.css";
import ShoppingCart from "../../Components/ShoppingCart";

const LayoutLanding = () => {
  const [searchValue, setSearchValue] = useState("")
  return <>
    <ShoppingCart  />
    <HeaderHome searchValue={searchValue} setSearchValue={setSearchValue}  />
    <div className="banner">
      <img src="img/home/banner.png" alt="Banner/" />
    </div>
    <main className="containerMain">
    <Categories />

      {/*  Permite renderizar los componentes hijos de una ruta específica dentro de un componente de layout principal. */}
      <Outlet />

      <section id="recommended">
        <h2>Recomendados para ti</h2>
        <div className="products-container">
          <SliderProducts products={productsJson}></SliderProducts>
        </div>

      </section>
      <section id="novedad">
        <h2>Novedades</h2>
        <div className="products-container">
          <SliderProducts products={productsJson}></SliderProducts>
        </div>
      </section>
      <section id="brands">
        <h2>Nuestras marcas más buscadas</h2>
        <div className="brands-container">
          <div className="brand">
            <img src="img/home/marcas/Rectangle 73.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/rectangle-74.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 76.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 77.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 78.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 79.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 80.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 81.png" alt="Marca" />
          </div>

          <div className="brand">
            <img src="img/home/marcas/Rectangle 82.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 83.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 84.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 85.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 86.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 87.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 88.png" alt="Marca" />
          </div>
          <div className="brand">
            <img src="img/home/marcas/Rectangle 89.png" alt="Marca" />
          </div>

        </div>
      </section>
      <section id="team">
        <div className="team-description">
          <h2>Conoce al equipo de Medigood</h2>
          <p>En farmacia MediGood L.T.D somos un equipo joven, la seña de identidad de nuestra farmacia siempre fue el trato personal, directo, amable y profesional.</p>
        </div>
        <div className="team-members">
          <div className="team-member">
            <img src="/img/home/equipo/pedro.png" alt="Miembro" />
            <h3>Pedro Bergillos</h3>
            <p>Ecommerce Manager</p>
          </div>
          <div className="team-member">
            <img src="/img/home/equipo/rafa.png" alt="Miembro" />
            <h3>Rafa Bergillos</h3>
            <p>Director de compras</p>
          </div>
          <div className="team-member">
            <img src="/img/home/equipo/azahara.png" alt="Miembro" />
            <h3>Azahara Varó</h3>
            <p>Gestión de stock </p>
          </div>

          <div className="team-member">
            <img src="/img/home/equipo/adelaida.png" alt="Miembro" />
            <h3>Adelaida Laguna</h3>
            <p>Atención al cliente</p>
          </div>

        </div>
      </section>

    </main>
    <FooterHome />
  </>
}

export default LayoutLanding;