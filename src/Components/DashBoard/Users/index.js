import { useNavigate,  } from "react-router-dom";

function Users() {

  const navigation = useNavigate();

  function goToAdd(){
    navigation("/dashboard/users/add")
  }
  function goToEdit(id){
    navigation("/dashboard/users/edit/"+id)
  }

  return <>
    <div class="container-header">
      <h2 class="title">Usuarios</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div class="search-bar">
        <input type="text" placeholder="Buscar por ID " />
        <button class="search-button">
          <img class="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />                    </button>
      </div>
    </div>

    {/* <!-- Botones de Detalle, Editar y Ocultar --> */}
    <div class="inventory-buttons">
      <button class="add-button" onClick={goToAdd}>Añadir</button>
      <button class="detalle-button">Detalle</button>
      <button class="edit-button" onClick={()=>{goToEdit(1)}}>Editar</button>
    </div>

    {/* <!-- Tabla de Usuarios --> */}
    <table class="table-users">
      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Nombre</th>
          <th>Rol</th>
          <th>Estado</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        {/* <!-- Filas con datos de usuarios --> */}
        <tr>
          <td><input type="checkbox" id="user001" /></td>
          <td>001</td>
          <td>Usuario 1</td>
          <td>Administrador</td>
          <td>Activo</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="user002" /></td>
          <td>002</td>
          <td>Usuario 2</td>
          <td>Usuario</td>
          <td>Inactivo</td>
        </tr>
        <tr>
          <td><input type="checkbox" id="user003" /></td>
          <td>003</td>
          <td>Usuario 3</td>
          <td>Usuario</td>
          <td>Activo</td>
        </tr>
      </tbody>
    </table>

{/* TODO: Crear la páginación de la tabla */}
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
    </div>  </>

}

export default Users;