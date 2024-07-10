import Categories from "../../Components/Categories";
import HeaderHome from "../../Components/Header/Home";
import "./style.css"
import products from "../../services/Products.json";
import ProductsPreview from "../../Components/ProductPreview";
import Slider from 'react-slick';
import PrevArrow from "../../Components/Carrousel/prevArrow";
import NextArrow from "../../Components/Carrousel/nextArrow";

function Home() {
  const settings = {
    dots: false, // posiciónes el en carrousel
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
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
          <Slider {...settings}>
            {products.map((product) => (
              ProductsPreview(product.id, product.imageUrl, product.name, product.price)
            ))}
          </Slider>
        </div>

      </section>
    </main>
  </>
}

export default Home;