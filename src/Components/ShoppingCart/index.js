import { useContext, useState } from "react";
import "./style.css"
import { GlobalContext } from "../../Context/GlobalContext";
const ShoppingCart = () => {
  const [quantitySelect, setQuantitySelect] = useState(1);
  
  // se obtiene el contexto global
  const {showShoppingCart,setShowShoppingCart}=useContext(GlobalContext)

  function incrementQuantity() {
    setQuantitySelect(quantitySelect + 1);

    // TODO: Implementar que no se pueda incrementar mas de la cantidad disponibke
  }

  function decrementQuantity() {
    if (quantitySelect > 1) {
      setQuantitySelect(quantitySelect - 1);
    }
  }
  return <>
    <div id="sidebar" className={showShoppingCart ? "sidebar open" : "sidebar"}  >
      <h2>Carrito de compras</h2>
      <i id="close-sidebar" onClick={()=> setShowShoppingCart(false)} class="close-icon" ><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32ZM24.7212 21.7598C25.322 22.3606 25.322 23.3347 24.7212 23.9355C24.1204 24.5363 23.1463 24.5363 22.5455 23.9355L16.5783 17.9683L10.5108 24.0358C9.90999 24.6366 8.93589 24.6366 8.33509 24.0358C7.73428 23.435 7.73428 22.4609 8.33509 21.86L14.4026 15.7926L8.62091 10.0109C8.0201 9.41012 8.0201 8.43601 8.62091 7.83521C9.22172 7.2344 10.1958 7.2344 10.7966 7.83521L16.5783 13.6169L22.2596 7.93548C22.8605 7.33468 23.8346 7.33468 24.4354 7.93548C25.0362 8.53629 25.0362 9.51039 24.4354 10.1112L18.754 15.7926L24.7212 21.7598Z" fill="#C4C4C4"></path>
      </svg></i>
      <div class="cart-item">
        <button class="cart-item-remove">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#484848" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m6 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
        <div class="cart-item-image-container">
          <img class="cart-item-image" src="img/home/image-tech-image-23.png" alt="imagen del Producto" />
        </div>
        <div class="cart-item-info">
          <p class="cart-item-title">Caudalie Crema Deliciosa Manos y uñas. </p>
          <p class="cart-item-price">$50.000</p>
          <div class="cart-item-quantity">
            <button class="quantity-decrease" onClick={decrementQuantity}>-</button>
            <input value={quantitySelect} class="quantity-input" />
            <button class="quantity-increase" onClick={incrementQuantity}>+</button>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <h3>Resumen de la compra</h3>
        <table>
          <thead>
            <tr>
              <th>Nombre del producto</th>
              <th>Precio unitario</th>
              <th>Cantidad</th>
              <th>Precio total</th>
            </tr>
          </thead>
          <tbody>
            <tr class="cart-summary-item">
              <td class="cart-summary-item-name">Nombre del producto</td>
              <td class="cart-summary-item-unit-price">Precio unitario</td>
              <td class="cart-summary-item-quantity">Cantidad</td>
              <td class="cart-summary-item-total-price">Precio total</td>
            </tr>
            {/* <!-- Repite .cart-summary-item para cada producto en el carrito --> */}
          </tbody>
        </table>
        <div class="cart-summary-total">
          <span>Total a pagar:</span>
          <span class="cart-summary-total-price">$0.00</span>
        </div>
        <div class="cart-summary-buttons">
          <button class="cart-summary-checkout">Comprar</button>
          <button class="cart-summary-remove-all">Remover</button>
        </div>

      </div>

      {/* <!-- Contenido de la barra lateral --> */}
    </div>
  </>
}

export default ShoppingCart;