import { useParams } from 'react-router-dom';
import { useState, useEffect,useRef } from 'react';
import getProductById from '../../services/getProductById';
import "./style.css"

import { useContext } from "react";
// import GlobalContextProvider, { GlobalContext } from '../context/GlobalContext';
import { useShoppingCart } from "../../hooks/useShoppingCart";

import { GlobalContext } from '../../Context/GlobalContext';
import "./style.css"

const ProductsDetails = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const {setShowShoppingCart } = useContext(GlobalContext)
  const { saveItemCart } = useShoppingCart();
  const productsDetailRef = useRef(null);  
  const [quantitySelect, setQuantitySelect] = useState(1);

  function incrementQuantity() {
    setQuantitySelect(quantitySelect + 1);
    // TODO: Implementar que no se pueda incrementar mas de la cantidad disponibke
  }
  function decrementQuantity() {
    if (quantitySelect > 1) {
      setQuantitySelect(quantitySelect - 1);
    }
  }

  useEffect(() => {
    if (id != null) {

      setProduct(getProductById(id));
        
      // Hace scroll
      productsDetailRef.current.scrollIntoView({ behavior: 'smooth' });
    }

  }, [id]);

  function formatPrice(price) {
    if (price === undefined || price === null) {
      return '0';
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  

  function addCart(){
    let productInformation = {
      id: product.id,
      image: product.imageUrl,
      name: product.name,
      price: product.price,
      quantity: quantitySelect
  };
  saveItemCart(productInformation);
  alert("Producto agregado al carrito");
  setShowShoppingCart(true);

  }


  return <>
    <section  id="product-detail" ref={productsDetailRef}>
      <div className="product-image-container">
        <img className="product-image" src={product.imageUrl} alt={`Imgen del producto ${product.name} `} />
      </div>
      <section className="product-info-container">
        {/* <!-- Marca del producto --> */}
        <p className="product-brand">CAUDALIE</p>
        <h1 className="product-title">{product.name} </h1>
        {/* <!-- cantidad del producto --> */}
        {/* TODO: Se puede agregar la cantidad del producto en las medias */}
        <p className="product-quantity"><span className="bold">Cantidad disponibles: </span>75 Unidades</p>
        <p className="product-category"><span className="bold">Categoria:</span> Cremas</p>
        <p className="product-description">Crema cicratizante y antibiotica que posee una gran cantidad de usos
          terapéuticos debida a su doble composición.
        </p>
        <p className="product-price">${product.price ? formatPrice(product.price) : '0'}</p>
        <p className="product-availability available">Disponible</p>
        {/* <!-- <p className="product-availability unavailable">No disponible</p> --> */}
        <div className="product-action">
          <div className="product-quantity-selector">
            <button className="quantity-decrease" onClick={decrementQuantity}>-</button>
            <input  className="quantity-input" value={quantitySelect}/>
            <button className="quantity-increase" onClick={incrementQuantity}>+</button>
          </div>
          <button className="add-to-cart-button" onClick={addCart} style={{ backgroundColor: 'rgba(0, 163, 255, 1)' }}>
            Añadir al carrito
          </button>

        </div>
      </section>
    </section>

  </>
}

export default ProductsDetails;