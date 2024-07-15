import { Link } from "react-router-dom";
import "./style.css"

import { useContext } from "react";
// import GlobalContextProvider, { GlobalContext } from '../context/GlobalContext';
import { useShoppingCart } from "../../hooks/useShoppingCart";

import { GlobalContext } from '../../Context/GlobalContext';

const ProductPreview = ({id, urlImg, name, price}) => {

  // se obtiene el contexto global
  const {setShowShoppingCart } = useContext(GlobalContext)

  const { saveItemCart } = useShoppingCart();
  
  function addCart(){
    let product = {
      id: id,
      image: urlImg,
      name: name,
      price: price,
      quantity: 1
  };
  saveItemCart(product);
  setShowShoppingCart(true);

  }

  // Para formatear el numero
  if(price!==undefined){
    price = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <div className="product" key={id}>
      <Link to={"/product/"+id}>
        <img src={urlImg} alt={"Producto " + name} className="img-product" />
        <h3 className="name-product">{name}</h3>
        <p> $<span className="precio">{price}</span></p>
      </Link>
      <div className="cart-button" onClick={addCart}>
        <img src="../img/home/icons-8-shopping-cart.svg" alt="Carrito" />
        Añadir
      </div>

    </div>
  );
};


export default ProductPreview;