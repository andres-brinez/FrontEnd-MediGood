import { useEffect, useState } from "react";
import { useNavigate, } from "react-router-dom";
import { getAllUsers } from "../../../services/users";

function Users() {

  const navigation = useNavigate();
  const [users, setUsers] = useState([]);
  const [userSelect, setUserSelect] = useState(null)


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
  function goToEdit() {
    if (userSelect !== null) {
      navigation("/dashboard/users/edit/" + userSelect)
    }
    else {
      alert("Debe seleccionar un usuario")
    }
  }
  function goToDetail() {
    if (userSelect !== null) {
      navigation("/dashboard/users/detail/" + userSelect)
    }
    else {
      alert("Debe seleccionar un usuario")
    }
  }

  return <>
    <div className="container-header">
      <h2 className="title">Usuarios</h2>
      {/* <!-- Barra de búsqueda --> */}
      <div className="search-bar">
        <input type="text" placeholder="Buscar por ID " />
        <button className="search-button">
          <img className="search-button-img" src="../img/dashboard/lupa.png" alt="Imagen de lupa" />                    </button>
      </div>
    </div>

    {/* <!-- Botones de Detalle, Editar y Ocultar --> */}
    <div className="inventory-buttons">
      <button className="add-button" onClick={goToAdd}>Añadir</button>
      <button className="detalle-button" onClick={() => { goToDetail() }}>Detalle</button>
      <button className="edit-button" onClick={() => { goToEdit() }}>Editar</button>
    </div>

    {/* <!-- Tabla de Usuarios --> */}
    <table className="table-users">
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
    </div>  </>

}

export default Users;