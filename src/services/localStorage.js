function addToCart(product) {
    // Intenta obtener los datos en el localStorage de cart y si no hay datos se inicializa un arraglo vacio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Añade el producto al carrito
    cart.push(product);
    // Guarda el nuevo arreglo del carrito en el localStorage como una cadena de texto JSON.
    localStorage.setItem('cart', JSON.stringify(cart));
}


export function getCartData() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    return cart;
}

export default addToCart;