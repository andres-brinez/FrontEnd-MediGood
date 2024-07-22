import { useNavigate } from "react-router-dom"
import "./style.css"
import { useEffect, useState } from "react";
import { getAllPurchaseProducts } from "../../../services/Purchase";
const Order = () => {

  const navigator = useNavigate()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllPurchaseProducts().then((response) => {
      setProducts(response)
      console.log(products)
    })
  }, [])

  function goToDetail(id) {
    navigator("/dashboard/orders/detail/" + id)
  }

  return <>
    <div class="container-header">
      <h2 class="title">Pedidos - ventas</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div class="search-bar">
        <input type="text" placeholder="Buscar por número" />
        <button class="search-button">
          <img class="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />
        </button>
      </div>
    </div>

    {/* <!-- Botón para ver detalles --> */}
    <button class="detail-button" onClick={() => { goToDetail(2) }} disabled>Ver Detalle</button>

    {/* <!-- Tabla de resumen de pedidos --> */}
    <table class="table">
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
            <td><input type="checkbox" name="" id="" /></td>
            <td>{product.id}</td>
            <td>{formattedDate}</td>
            <td>{product.quantity}</td>
            <td>Nombre del cliente </td>
            <td>Enviado</td>
            <td>${formattedPrice}</td>
          </tr>
        })}

      </tbody>
    </table>
    <img className="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />

    {/* TODO: Agregar la funcionalidad de páginiación */}
    {/* <!-- Paginación de la tabla --> */}
    <div class="pagination">
      <div class="pagination-options">
        <button>Anterior</button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>...</span>
        <button>Siguiente</button>
      </div>
      <button class="show-all-button">Mostrar Todos</button>
    </div>

  </>
}

export default Order;