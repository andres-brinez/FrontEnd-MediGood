import "./style.css"

const ProductsPreview = (id,urlImg,name,price) => {
  return (
    <div className="product" key={id}>
      <a href={"ruta/a/la/pagina/del/detalle/del/producto"+id}>
        <img src={urlImg} alt={"Producto "+name} className="img-product" />
        <h3 className="name-product">{name}</h3>
        <p> $<span className="precio">{price}</span></p>
      </a>
      <div className="cart-button">
        <img src="img/home/icons-8-shopping-cart.svg" alt="Carrito" />
        Añadir
      </div>
    </div>
  );
};


export default ProductsPreview;