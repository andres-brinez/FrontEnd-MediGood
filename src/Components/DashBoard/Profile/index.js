import { useContext, useEffect, useState } from "react";
import "./style.css"
import { GlobalContext } from "../../../Context/GlobalContext";
import { editUser, getUserByEmail } from "../../../services/users";
import { useNavigate } from "react-router-dom";
function Profile() {

  const { emailUser } = useContext(GlobalContext);
  const [user, setUser] = useState([])

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [dni, setDni] = useState("")

  const navigator = useNavigate();

  let tabVer;
  let tabEditar;



  useEffect(() => {

    // Agrega estilos y muestra la pestaña "Ver" por defecto
    openTabVer()
    openTab("contenido-ver");

    if (emailUser === "") {
      alert("Se debe iniciar sesión para acceder a esta sección")
      navigator("/login")
      return;
    }
    getUserByEmail(emailUser).then((response) => {
      setUser(response)
      setName(response.name)
      setEmail(response.email)
      setPhoneNumber(response.phoneNumber)
      setAddress(response.address)
      setDni(response.dni)

    })

  }, [])

  function handleSubmit(event) {
    event.preventDefault()
    const userUpdate = {
      name,
      email,
      phoneNumber,
      address,
      dni
    }
    editUser(userUpdate).then((response) => {

      if (response) {
        alert("Usuario editado")
        getUserByEmail(emailUser).then((response) => {
          setUser(response)
          setName(response.name)
          setEmail(response.email)
          setPhoneNumber(response.phoneNumber)
          setAddress(response.address)
          setDni(response.dni)

        })
        openTabVer()
      }
      else {
        alert("Error al ediitar el usuario")
      }
    }

    )

  }

  // Función para cambiar entre las pestañas
  function openTab(tabName) {
    // Oculta todos los contenidos de pestañas
    const tabContents = document.getElementsByClassName("tab-content");
    for (const content of tabContents) {
      content.style.display = "none";
    }

    // Muestra el contenido de la pestaña seleccionada
    document.getElementById(tabName).style.display = "block";
  }


  function openTabVer() {
    // Para agregar estilos al btn seleciconado
    tabVer = document.querySelector(".tab-ver")
    tabEditar = document.querySelector(".tab-editar")

    tabVer.classList.add("active-tab");
    tabEditar.classList.remove("active-tab");

    openTab("contenido-ver");
  }

  function openTabEditar() {
    // Para agregar estilos al btn seleciconado
    tabVer = document.querySelector(".tab-ver")
    tabEditar = document.querySelector(".tab-editar")

    tabEditar.classList.add("active-tab");
    tabVer.classList.remove("active-tab");

    openTab("contenido-editar");
  }



  return <>
    <div className="container-header">
      <h2 className="title">Perfil</h2>
      <div className="profile-options">
        <p className="tab-ver active-tab" onClick={openTabVer}>Ver</p>
        <p className="tab-editar" onClick={openTabEditar}>Editar</p>
      </div>

    </div>

    {/* <!-- Contenido de la pestaña "Ver" --> */}
    <div id="contenido-ver" className="tab-content">
      <h3>Información</h3>
      <div className="profile-info">

        <label for="nombre">Nombre</label>
        <p id="nombre">{user.name}</p>

        <label for="correo">Correo Electrónico</label>
        <p id="correo">{user.email}</p>

        <label for="celular">Celular</label>
        <p id="celular">{user.phoneNumber === 0 ? "--" : user.phoneNumber}</p>

        <label for="direccion">Dirección</label>
        <p id="direccion">{address}</p>

        <label for="identificacion">Número de Identificación</label>
        <p id="identificacion">{user.dni === 0 ? "--" : user.dni}</p>

      </div>
    </div>


    {/* <!-- Contenido de la pestaña "Editar" --> */}
    <div id="contenido-editar" className="tab-content" >
      <form onSubmit={handleSubmit} id="editar-form" className="edit-form dashboard">
        <h3>Editar Perfil</h3>
        {/* <!-- Campos de información personal --> */}
        <label for="nombre-edit">Nombre</label>
        <input value={name} onChange={(event) => setName(event.target.value)} type="text" id="nombre-edit" name="nombre-edit" required />


        <label for="telefono-edit">Teléfono</label>
        <input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} type="tel" id="telefono-edit" name="telefono-edit" />

        <label for="direccion-edit">Dirección</label>
        <input value={address} onChange={(event) => setAddress(event.target.value)} type="text" id="direccion-edit" name="direccion-edit" />


        <label for="identificacion-edit">Número de Identificación</label>
        <input value={dni} onChange={(event) => setDni(event.target.value)} type="text" id="identificacion-edit" name="identificacion-edit" />

        {/* <!-- Cambiar Contraseña --> */}
        <h3>Cambiar Contraseña</h3>

        <label for="current-password-edit">Contraseña Actual:</label>
        <input type="password" id="current-password-edit" name="current-password-edit" required disabled />

        <label for="new-password-edit">Nueva Contraseña:</label>
        <input type="password" id="new-password-edit" name="new-password-edit" required disabled />

        <label for="confirm-password-edit">Confirmar Contraseña:</label>
        <input type="password" id="confirm-password-edit" name="confirm-password-edit" required disabled />
        <button type="submit">Guardar Cambios</button>

      </form>
    </div>
  </>
}

export default Profile;