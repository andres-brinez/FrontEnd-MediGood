import { useState, useEffect } from "react";

const CartItem = ({ id, imgUrl, name, price, quantity }) => {
  const [quantitySelect, setQuantitySelect] = useState(1);

  useEffect(() => {
    setQuantitySelect(quantity);
  }, [quantity]);

  function incrementQuantity() {
    setQuantitySelect(quantitySelect + 1);
    // TODO: Implementar que no se pueda incrementar mas de la cantidad disponibke
  }

  function decrementQuantity() {
    if (quantitySelect > 1) {
      setQuantitySelect(quantitySelect - 1);
    }
  }

  return (
    <div className="cart-item" key={id}>
      <button className="cart-item-remove">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#484848" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
      <div className="cart-item-image-container">
        <img className="cart-item-image" src={imgUrl} alt={`imagen del Producto ${name}`} />
      </div>
      <div className="cart-item-info">
        <p className="cart-item-title">{name}</p>
        <p className="cart-item-price">${price}</p>
        <div className="cart-item-quantity">
          <button className="quantity-decrease" onClick={decrementQuantity}>
            -
          </button>
          <input defaultValue={quantitySelect} className="quantity-input" />
          <button className="quantity-increase" onClick={incrementQuantity}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
