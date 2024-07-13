 import './style.css'; // Importa el archivo CSS del carrusel
import Slider from 'react-slick';
import PrevArrow from '../Carrousel/prevArrow';
import NextArrow from '../Carrousel/nextArrow';
import categoriesData from '../../services/Categories.json';

const Categories = () => {

  const settings = {
    dots: false, // posiciónes el en carrousel
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (

    <section className="categories"  >
      <h2>Categorias</h2>
      <div className="categories-container">
      <Slider {...settings}>
      {categoriesData.map((category)=>(
        <div className="category" key={category.id}>
              <a href={`category/${category.id}`}>
                  <p>{category.name}</p>
              </a>
          </div>
      ))}
         
          
      </Slider>
      </div>
    </section>
  );
};

export default Categories;
