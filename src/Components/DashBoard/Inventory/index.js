import { useNavigate,  } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../services/productService";
const Inventory = () => {

  const [products, setProducts] = useState([]);
  const [selectedId, setSelectedId] = useState(null);


  const navigate = useNavigate();

  useEffect(() => {
    getAllProducts().then((response) => {
      setProducts(response);
    })
  }, [])

  function goToAddProduct() {
    navigate("/dashboard/inventory/addProduct");
  }

  function goToEditProduct() {
    if (selectedId) {
      navigate("/dashboard/inventory/editProduct/" + selectedId);
    }
    else {
      alert("Seleccione un producto para editarlo")
    }
  }

  function goToDetailProduct() {
    if (selectedId) {
      navigate("/dashboard/inventory/detailProduct/" + selectedId);
    }
    else {
      alert("Seleccione un producto para ver el detalle")
    }

  }



  return <>
    <div className="container-header">
      <h2 className="title">Inventario</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar por número" />
        <button className="search-button">
          <img className="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />
        </button>
      </div>
    </div>

    {/* <!-- Botones de Agregar y Eliminar --> */}
    <div className="inventory-buttons">
      <button className="add-button" onClick={goToAddProduct}>Agregar</button>
      <button className="detalle-button" onClick={() => { goToDetailProduct() }}>Ver detalle</button>
      <button className="edit-button" onClick={() => { goToEditProduct() }}>Editar</button>

    </div>
    {/* <!-- Tabla de resumen de pedidos --> */}
    <table className="table-products">
      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th></th>
          <th>Número</th>
          <th>Nombre</th>
          <th>Cantidad Disponible</th>
          <th>Valor Unitario</th>
          <th>Fecha de Ingreso</th>
          <th>Estado</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        {/* TODO: Hacer validaciones por si no hay productos disponibles */}
        {
          products.map((product) => {
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

            return (
              <tr key={product.id}>
                <td><input
                  type="checkbox"
                  id={product.id}
                  checked={product.id === selectedId}
                  onChange={() => setSelectedId(product.id)}
                /></td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{formattedPrice}</td>
                <td>{formattedDate}</td>
                <td>{product.inStock ? "Disponible" : "No disponible"}</td>
              </tr>
            );
          })

        }

      </tbody>
    </table>

    {/* TODO: Agregar al Paginación de la tabla  */}
    {/* <div className="pagination">
      <div className="pagination-options">
        <button>Anterior</button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
        <button>Siguiente</button>
      </div>
      <button className="show-all-button">Mostrar Todos</button>
    </div> */}
  </>

}

export default Inventory;