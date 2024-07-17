import { useNavigate } from "react-router-dom"

const Buys = () => {
  const navigator= useNavigate()

  function goToDetail(id){
    navigator("/dashboard/buys/detail/"+id)
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

    {/* <!-- Botón para ver detalles --> */}
    <button class="detail-button" onClick={()=>{goToDetail(1)}}>Ver Detalle</button>

    {/* <!-- Tabla de resumen de pedidos --> */}
    <table class="table-products">
      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th></th>
          <th>Número</th>
          <th>Cantidad de productos</th>
          <th>Estado</th>
          <th>Fecha</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        {/* <!-- Filas con datos de pedidos --> */}
        <tr>
          <td><input type="checkbox" id="pedido001" /></td>
          <td>001</td>
          <td>5</td>
          <td>En entrega</td> {/* <!-- Ejemplo de datos de estado --> */}
          <td>2024-01-27</td> {/* <!-- Ejemplo de datos de fecha --> */}

        </tr>
        <tr>
          <td><input type="checkbox" id="pedido001" /></td>
          <td>001</td>
          <td>5</td>
          <td>Entregado</td>
          <td>2024-01-27</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="pedido001" /></td>
          <td>001</td>
          <td>5</td>
          <td>En proceso</td>
          <td>2024-01-27</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="pedido001" /></td>
          <td>001</td>
          <td>5</td>
          <td>En proceso</td>
          <td>2024-01-27</td>
        </tr>
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
}

export default Buys;