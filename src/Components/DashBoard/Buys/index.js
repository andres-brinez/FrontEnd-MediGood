import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalContext } from "../../../Context/GlobalContext";
import { getPurchaseByEmail } from "../../../services/Purchase";

const Buys = () => {
  const navigator = useNavigate()

  const { emailUser } = useContext(GlobalContext);
  const [products, setProduct] = useState([])

  useEffect(() => {
    if (emailUser === "") {
      alert("Se debe iniciar sesión para acceder a esta sección")
      // navigator("/login")
      return;
    }
    getPurchaseByEmail(emailUser).then((response) => {
      console.log(response)
      setProduct(response)
    })
  })

  function goToDetail(id) {
    navigator("/dashboard/buys/detail/" + id)
  }
  return <>
    <div class="container-header">
      <h2 class="title">Compras</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div class="search-bar">
        <input type="text" placeholder="Buscar por número" />
        <button class="search-button">
          <img class="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />
        </button>
      </div>
    </div>

    {/* <!-- Tabla de resumen de pedidos --> */}
    {(products && products.length > 0) ? (
      <>
        {/* <!-- Botón para ver detalles --> */}
        <button class="detail-button" onClick={() => { goToDetail(1) }}>Ver Detalle</button>

        <table class="table-products">
          {/* <!-- Encabezados de la tabla --> */}
          <thead>
            <tr>
              <th></th>
              <th>Número</th>
              <th>Cantidad de productos</th>
              <th>Total</th>
              <th>Estado</th>
              <th>Fecha</th>
            </tr>
          </thead>
          {/* <!-- Contenido de la tabla --> */}
          <tbody>
            {
              products.map((product, index) => {
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

                return (<tr key={index}>
                  <td><input type="checkbox"></input></td>
                  <td>{product.id}</td>
                  <td>{product.quantity}</td>
                  <td>{formattedPrice}</td>
                  <td>Enviado</td>
                  <td>{formattedDate}</td>
                </tr>
                )
              })
            }

          </tbody>
        </table>

        {/* TODO: Agregar la funcionalidad de páginación */}
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
    ) : <tr>No se han hecho compras</tr>}


  </>
}

export default Buys;