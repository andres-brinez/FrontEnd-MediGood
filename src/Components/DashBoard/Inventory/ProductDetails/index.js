import { useEffect, useState } from "react";
import "./style.css"
import { useParams } from "react-router-dom";
import { getProductById } from "../../../../services/productService";
const ProductDetails = () => {

  const [product, setProduct] = useState({});
  // TODO: se debe hacer que desde la api se retorne la categoria y la marca
  const { name, quantity, description, price, inStock, dateAdded, imageUrl } = product
  const { id } = useParams();

  const formattedDate = new Date(product.dateAdded).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP'
  }).format(product.price);

  useEffect(() => {
    if (id) {
      getProductById(id).then((response) => {
        setProduct(response);
      })
    }
    else {
      alert("No hay ID del producto")
    }
  }, [])

  return <>
    <div className="container-header">
      <h2 className="title">Detalle del Producto</h2>
    </div>

    {/* <!-- Detalles del producto --> */}
    <div className="product-details">
      <div className="product-image">
        <img src={imageUrl} alt="Imagen del Producto" />
      </div>
      <div className="product-info">
        <label for="nombre">Nombre</label>
        <p id="nombre">{name}</p>

        <label for="cantidad">Cantidad Disponible</label>
        <p id="cantidad">{quantity}</p>

        <label for="descripcion">Descripción</label>
        <p id="descripcion">{description}
        </p>

        <label for="categoria">Categoría</label>
        <p id="categoria">Categoría del Producto</p>

        <label for="marca">Marca</label>
        <p id="marca">Nombre de la Marca</p>

        <label for="precio">Precio Unitario</label>
        <p id="precio">{formattedPrice}</p>

        <label for="estado">Estado:</label>
        <p id="estado">{inStock ? "Disponible" : "No disponible"}</p>

        <label for="fecha-ingreso">Fecha de Ingreso</label>
        <p id="fecha-ingreso">{formattedDate}</p>
      </div>
    </div>
  </>
}

export default ProductDetails;