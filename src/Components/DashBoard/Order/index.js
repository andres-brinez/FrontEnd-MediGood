import "./style.css"
const Order = () => {
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
    <button class="detail-button">Ver Detalle</button>

    {/* <!-- Tabla de resumen de pedidos --> */}
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Fecha</th>
          <th>Cliente</th>
          <th>Estado</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td>1</td>
          <td>12/10/2024</td>
          <td>Andres Briñez</td>
          <td>Enviado</td>
          <td>$ 100.000</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td>2</td>
          <td>12/10/2024</td>
          <td>Andres Briñez</td>
          <td>En proceso</td>
          <td>$ 100.000</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td>3</td>
          <td>12/10/2024</td>
          <td>Andres Briñez</td>
          <td>Entregado</td>
          <td>$ 100.000</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td>4</td>
          <td>12/10/2024</td>
          <td>Andres Briñez</td>
          <td>Enviado</td>
          <td>$ 100.000</td>
        </tr>
        <tr>
          <td><input type="checkbox" name="" id="" /></td>
          <td>5</td>
          <td>12/10/2024</td>
          <td>Andres Briñez</td>
          <td>Enviado</td>
          <td>$ 100.000</td>
        </tr>
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