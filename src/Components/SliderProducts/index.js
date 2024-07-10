import Slider from 'react-slick';
import PrevArrow from "../../Components/Carrousel/prevArrow";
import NextArrow from "../../Components/Carrousel/nextArrow";
import ProductsPreview from "../../Components/ProductPreview";

const SliderProducts = ({products}) => {
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

  return<Slider 
  {...settings}>
    {products.map((product) => (
      ProductsPreview(product.id, product.imageUrl, product.name, product.price)
    ))}
  </Slider>
}

export default SliderProducts;
