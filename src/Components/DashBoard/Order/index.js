import { useNavigate } from "react-router-dom"
import "./style.css"
import { useEffect, useState } from "react";
import { getAllPurchaseProducts } from "../../../services/Purchase";
const Order = () => {

  const navigator = useNavigate()

  const [products, setProducts] = useState([]);

  const [productSelect, setProductSelect] = useState(null)

  useEffect(() => {
    getAllPurchaseProducts().then((response) => {
      setProducts(response)
      console.log(products)
    })
  }, [products])

  function goToDetail() {
    if (!productSelect) {
      alert("Debe seleccionar un producto")
      return;
    }
    navigator("/dashboard/orders/detail/" + productSelect)
  }

  return <>
    <div className="container-header">
      <h2 className="title">Pedidos - ventas</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar por número" />
        <button className="search-button">
          <img className="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />
        </button>
      </div>
    </div>

    {/* <!-- Botón para ver detalles --> */}
    <button className="detail-button" onClick={() => { goToDetail() }} >Ver Detalle</button>

    {/* <!-- Tabla de resumen de pedidos --> */}
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Fecha</th>
          <th>Cantidad productos</th>
          <th>Cliente</th>
          <th>Estado</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>

        {products.map((product) => {

          const formattedDate = new Date(product.date).toLocaleString('es-ES', {
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
          }).format(product.total);

          return <tr>
            <td><input type="checkbox"
              name=""
              id={product.id}
              checked={product.id === productSelect}
              onChange={() => setProductSelect(product.id)} /></td>
            <td>{product.id}</td>
            <td>{formattedDate}</td>
            <td>{product.quantity}</td>
            <td>Nombre del cliente </td>
            <td>Enviando</td>
            <td>${formattedPrice}</td>
          </tr>
        })}

      </tbody>
    </table>

    {/* TODO: Agregar la funcionalidad de páginiación */}
    {/* <!-- Paginación de la tabla --> */}
    <div className="pagination">
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
    </div>

  </>
}

export default Order;