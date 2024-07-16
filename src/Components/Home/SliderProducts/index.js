import Slider from 'react-slick';
import PrevArrow from "../../Carrousel/prevArrow";
import NextArrow from "../../Carrousel/nextArrow";
import ProductPreview from "../ProductPreview";

const SliderProducts = ({ products }) => {
  const settings = {
    dots: false, // posiciónes el en carrousel
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return <Slider
    {...settings}>
    {products.map((product) => (
      <ProductPreview key={product.id} id={product.id} urlImg={product.imageUrl} name={product.name} price={product.price} />
    ))}
  </Slider>
}

export default SliderProducts;
