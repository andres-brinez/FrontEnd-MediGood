// hooks/useCart.js
// Hook Personalizado
import { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export function useShoppingCart() {
  const { setShowShoppingCart, setQuantityIntemShoppingCart } = useContext(GlobalContext);

  function saveItemCart(product) {
    // Obtiene el carrito de compras y si no existe lo crea con un arreglo vacio 
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Agrega el producto al carrito
    cart.push(product);
    // Almacena el carrito en el local storage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualizar el estado global
    setShowShoppingCart(true);
    setQuantityIntemShoppingCart(cart.length);
  }

  function getCartData() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
  }

  // Eliminar todo el carrito de compras
  function deleteInformationCart() {
    localStorage.removeItem('cart');
  }

  // Eliminar un item por id
  function deleteItemCartById(id) {
    const cart = getCartData();
    const newCart = cart.filter(item => item.id!== id);
    localStorage.setItem('cart', JSON.stringify(newCart));
    setQuantityIntemShoppingCart(newCart.length);
  }


  return { saveItemCart, getCartData,deleteInformationCart,deleteItemCartById };
}
