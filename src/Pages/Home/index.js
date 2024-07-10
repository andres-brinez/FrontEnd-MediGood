import Categories from "../../Components/Categories";
import HeaderHome from "../../Components/Header/Home";
import "./style.css"
import products from "../../services/Products.json";
import SliderProducts from "../../Components/SliderProducts";


function Home() {
  
  return <>
    <HeaderHome />
    <div class="banner">
      <img src="img/home/banner.png" alt="Banner/" />
    </div>
    <main class="containerMain">
      <Categories />
      <section id="recommended">
        <h2>Recomendados para ti</h2>
        <div class="products-container">
         <SliderProducts products={products}></SliderProducts>
        </div>

      </section>
      <section id="novedad">
        <h2>Novedades</h2>
        <div class="products-container">
        <SliderProducts products={products}></SliderProducts>
        </div>

      </section>
    </main>
  </>
}

export default Home;