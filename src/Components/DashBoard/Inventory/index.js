import { useNavigate } from "react-router-dom";
import "./style.css";
const Inventory = () => {

  const navigate = useNavigate();

  function goToAddProduct(){
    navigate("/dashboard/addProduct");
  }

  function goToEditProduct(){
    navigate("/dashboard/editProduct");
  }

  function goToDetailProduct(id){
    
    navigate("/dashboard/detailProduct/"+id);
  }



  return <>
    <div class="inventory-container">
      <h2 class="title">Inventario</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div class="search-bar">
        <input type="text" placeholder="Buscar por número" />
        <button className="search-button">
          <img  className="search-button-img" src="./img/dashboard/lupa.png" alt="" />
        </button>
      </div>
    </div>

    
    {/* <!-- Botones de Agregar y Eliminar --> */}
    <div class="inventory-buttons">
      <button class="add-button" onClick={goToAddProduct}>Agregar</button>
      <button class="detalle-button" onClick={()=>{goToDetailProduct(1)}}>Ver detalle</button>
      <button class="edit-button">Editar</button>

    </div>
    {/* <!-- Tabla de resumen de pedidos --> */}
    <table class="table-products">
      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th></th>
          <th>Número</th>
          <th>Producto</th>
          <th>Cantidad Disponible</th>
          <th>Valor Unitario</th>
          <th>Fecha de Ingreso</th>
          <th>Estado</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        <tr>
          <td><input type="checkbox" id="producto001" /></td>
          <td>001</td>
          <td>Producto 1</td>
          <td>100</td>
          <td>$10.00</td>
          <td>2024-01-27</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="producto002" /></td>
          <td>002</td>
          <td>Producto 2</td>
          <td>75</td>
          <td>$15.00</td>
          <td>2024-01-28</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="producto001" /></td>
          <td>001</td>
          <td>Producto 1</td>
          <td>100</td>
          <td>$10.00</td>
          <td>2024-01-27</td>
          <td>Disponible</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="producto002" /></td>
          <td>002</td>
          <td>Producto 2</td>
          <td>75</td>
          <td>$15.00</td>
          <td>2024-01-28</td>
          <td>Oculto</td>
        </tr>
      </tbody>
    </table>

    {/* TODO: Agregar al Paginación de la tabla  */}
    {/* <div class="pagination">
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
    </div> */}
  </>

}

export default Inventory;