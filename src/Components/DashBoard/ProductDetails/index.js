import "./style.css"
const ProductDetails = () => {
  return <>
    <div class="inventory-container">
      <h2 class="title">Detalle del Producto</h2>
    </div>

    {/* <!-- Detalles del producto --> */}
    <div class="product-details">
      <div class="product-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Ritalin-SR-20mg-full.jpg" alt="Imagen del Producto" />
      </div>
      <div class="product-info">
        <label for="nombre">Nombre</label>
        <p id="nombre">Nombre del Producto</p>

        <label for="cantidad">Cantidad Disponible</label>
        <p id="cantidad">Cantidad</p>

        <label for="descripcion">Descripción</label>
        <p id="descripcion">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero doloremque, suscipit omnis repudiandae iusto veniam quaerat dicta repellendus nisi alias reprehenderit, perferendis architecto distinctio laboriosam deserunt corporis consectetur at libero.
        </p>

        <label for="categoria">Categoría</label>
        <p id="categoria">Categoría del Producto</p>

        <label for="marca">Marca</label>
        <p id="marca">Nombre de la Marca</p>



        <label for="precio">Precio Unitario</label>
        <p id="precio">Precio del Producto</p>

        <label for="estado">Estado:</label>
        <p id="estado">Estado del Producto</p>

        <label for="fecha-ingreso">Fecha de Ingreso</label>
        <p id="fecha-ingreso">Fecha de Ingreso del Producto</p>
      </div>
    </div>
  </>
}

export default ProductDetails;