import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { getAllUsers } from "../../../services/users";

function Users() {

  const navigation = useNavigate();
  const [users, setUsers] = useState([]);
  const [userSelect, setUserSelect] = useState()


  useEffect(() => {
    getAllUsers().then((response) => {
      if (response) {
        setUsers(response)
      }
    })
  }, [])

  function goToAdd() {
    navigation("/dashboard/users/add")
  }
  function goToEdit(id) {
    navigation("/dashboard/users/edit/" + id)
  }
  function goToDetail(id) {
    navigation("/dashboard/users/detail/" + id)
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
      <button class="detalle-button" onClick={() => { goToDetail(1) }}>Detalle</button>
      <button class="edit-button" onClick={() => { goToEdit(1) }}>Editar</button>
    </div>

    {/* <!-- Tabla de Usuarios --> */}
    <table class="table-users">
      {/* <!-- Encabezados de la tabla --> */}
      <thead>
        <tr>
          <th></th>
          <th>Email</th>
          <th>Nombre</th>
          <th>Rol</th>
          <th>Estado</th>
        </tr>
      </thead>
      {/* <!-- Contenido de la tabla --> */}
      <tbody>
        {/* <!-- Filas con datos de usuarios --> */}
        {users.map((user) => {
          return (
            <tr>
              <td><input type="checkbox"
                id={user.email}
                checked={user.email === userSelect}
                onChange={() => { setUserSelect(user.email) }} />
              </td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.rol === "USER" ? "Usuario" : "Administrador"}</td>
              <td>{user.enabled ? "Activo" : "Inactivo"}</td>
            </tr>
          )
        })}


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