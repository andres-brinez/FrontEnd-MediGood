import { useContext, useState, useEffect } from "react";
import "./style.css"
import { GlobalContext } from "../../../Context/GlobalContext";
import { useShoppingCart } from "../../../hooks/useShoppingCart";
import CartItem from "../CartItem";
import { createPurchaseProducts, purchaseProducts } from "../../../services/Purchase";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // se obtiene el contexto global
  const { showShoppingCart, setShowShoppingCart, setQuantityIntemShoppingCart } = useContext(GlobalContext)
  const { getCartData, deleteInformationCart, deleteItemCartById } = useShoppingCart()
  const { emailUser } = useContext(GlobalContext)
  useEffect(() => {
    // Obtener los datos del carrito y actualizar el estado
    const data = getCartData();
    setCartItems(data);
  }, [showShoppingCart]);

  function formatPrice(price) {
    if (price === undefined || price === null) {
      return '0';
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  // Calcula el total de la compra de productos
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      let price = typeof item.price === 'string' ? parseFloat(item.price.replace('.', '')) : item.price;
      return total + price * item.quantity;
    }, 0);

  };

  // Eliminar todo el carrito de compras
  function deteleAllItemsCart() {

    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar todos los productos del carrito?");

    if (confirmDelete) {
      deleteInformationCart();
      // Obtener los datos del carrito y actualizar el estado
      const data = getCartData();
      setCartItems(data);
      setQuantityIntemShoppingCart(data.length);
    }
  }

  // Eliminar item carrito por id
  function deleteItemCart(id) {
    // TODO: Hay que hacer un cambio por el id a eliminar porque si se agregan dos productos con el mismo id se eliman 
    const confirmDelete = window.confirm("¿Estás seguro de que quieres eliminar este elemento?");
    if (confirmDelete) {
      deleteItemCartById(id);
      // Obtener los datos del carrito y actualizar el estado
      const data = getCartData();
      setCartItems(data);
    }
  }

  // Comprar los productos
  function buyItems() {
    if (emailUser === "") {
      alert("Debes iniciar sesión para poder comprar")
      return;
    }
    const confirmBuy = window.confirm("¿Estás seguro de que quieres comprar estos productos?");
    if (confirmBuy) {

      let productsBuy = cartItems.map(item => {
        return {
          id: item.id,
          quantity: item.quantity
        }
      });

      let buyInformation = {
        emailUser: emailUser,
        products: productsBuy
      }

      createPurchaseProducts(buyInformation).then(response => {

        if (response) {
          deleteInformationCart();
          // Obtener los datos del carrito y actualizar el estado
          const data = getCartData();
          setCartItems(data);
          console.log(buyInformation);
        }
      })



    }
  }

  return <>
    <div id="sidebar" className={showShoppingCart ? "sidebar open" : "sidebar"}  >
      <h2>Carrito de compras</h2>
      <p>{cartItems.length === 0 ? "No hay ningún producto agregado al carrito, agrega un producto para verlo aquí  " : ""}</p>
      <i id="close-sidebar" onClick={() => setShowShoppingCart(false)} className="close-icon" ><svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M16.5 32C25.3366 32 32.5 24.8366 32.5 16C32.5 7.16344 25.3366 0 16.5 0C7.66344 0 0.5 7.16344 0.5 16C0.5 24.8366 7.66344 32 16.5 32ZM24.7212 21.7598C25.322 22.3606 25.322 23.3347 24.7212 23.9355C24.1204 24.5363 23.1463 24.5363 22.5455 23.9355L16.5783 17.9683L10.5108 24.0358C9.90999 24.6366 8.93589 24.6366 8.33509 24.0358C7.73428 23.435 7.73428 22.4609 8.33509 21.86L14.4026 15.7926L8.62091 10.0109C8.0201 9.41012 8.0201 8.43601 8.62091 7.83521C9.22172 7.2344 10.1958 7.2344 10.7966 7.83521L16.5783 13.6169L22.2596 7.93548C22.8605 7.33468 23.8346 7.33468 24.4354 7.93548C25.0362 8.53629 25.0362 9.51039 24.4354 10.1112L18.754 15.7926L24.7212 21.7598Z" fill="#C4C4C4"></path>
      </svg></i>
      {cartItems.map((product, index) => (
        <CartItem
          key={`${product.id}-${index}-${Math.random().toString(36).substr(2, 9)}`}
          id={product.id}
          imgUrl={product.image}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
          onDelete={deleteItemCart} />
      ))}

      <div className="cart-summary" style={cartItems.length > 0 ? { display: "block" } : { display: "none" }}>
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
            {cartItems.map((product) => (
              <tr className="cart-summary-item">
                <td className="cart-summary-item-name">{product.name}</td>
                <td className="cart-summary-item-unit-price">${formatPrice(product.price)}</td>
                <td className="cart-summary-item-quantity">{product.quantity}</td>
                <td className="cart-summary-item-total-price">{formatPrice(product.quantity * product.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="cart-summary-total">
          <span>Total a pagar:</span>
          <span className="cart-summary-total-price">${formatPrice(calculateTotal())}</span>
        </div>

        <div className="cart-summary-buttons">
          <button className="cart-summary-checkout" onClick={buyItems}>Comprar</button>
          <button className="cart-summary-remove-all" onClick={deteleAllItemsCart}>Remover</button>
        </div>

      </div>

      {/* <!-- Contenido de la barra lateral --> */}
    </div>
  </>
}

export default ShoppingCart;