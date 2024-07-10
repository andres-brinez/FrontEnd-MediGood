import "./style.css"

const ProductsPreview = (id,urlImg,name,price) => {
  return (
    <div class="product">
      <a href={"ruta/a/la/pagina/del/detalle/del/producto"+id}>
        <img src={urlImg} alt={"Producto "+name} class="img-product" />
        <h3 className="name-product">{name}</h3>
        <p> $<span class="precio">10.000</span></p>
      </a>
      <div class="cart-button">
        <img src="img/home/icons-8-shopping-cart.svg" alt="Carrito" />
        Añadir
      </div>
    </div>
  );
};


export default ProductsPreview;