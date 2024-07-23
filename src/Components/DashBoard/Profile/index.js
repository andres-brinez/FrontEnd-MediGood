import { useContext, useEffect, useState } from "react";
import "./style.css"
import { GlobalContext } from "../../../Context/GlobalContext";
import { getUserByEmail } from "../../../services/users";
import { useNavigate } from "react-router-dom";
function Profile() {

  const { emailUser } = useContext(GlobalContext);
  const [user, setUser]= useState([])

  const navigator = useNavigate();

  let tabVer;
  let tabEditar;

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


  function openTabVer(){
    // Para agregar estilos al btn seleciconado
    tabVer.classList.add("active-tab");
    tabEditar.classList.remove("active-tab");

    openTab("contenido-ver");
  }

  function openTabEditar(){
    // Para agregar estilos al btn seleciconado
    tabEditar.classList.add("active-tab");
    tabVer.classList.remove("active-tab");

    openTab("contenido-editar");
  }


  useEffect(() => {
    tabVer = document.querySelector(".tab-ver")
    tabEditar = document.querySelector(".tab-editar")

    // Agrega estilos y muestra la pestaña "Ver" por defecto
    openTabVer()
    openTab("contenido-ver");

    if (emailUser === "") {
      alert("Se debe iniciar sesión para acceder a esta sección")
       navigator("/login")
      return;
    }
    getUserByEmail(emailUser).then((response) => {
      console.log(response)
      setUser(response)
    })

  }, [])


  return <>
    <div class="container-header">
      <h2 class="title">Perfil</h2>
      <div class="profile-options">
        <p class="tab-ver active-tab" onClick={openTabVer}>Ver</p>
        <p class="tab-editar" onClick={openTabEditar}>Editar</p>
      </div>

    </div>

    {/* <!-- Contenido de la pestaña "Ver" --> */}
    <div id="contenido-ver" class="tab-content">
      <h3>Información</h3>
      <div class="profile-info">

        <label for="nombre">Nombre</label>
        <p id="nombre">{user.name}</p>

        <label for="correo">Correo Electrónico</label>
        <p id="correo">{user.email}</p>

        <label for="celular">Celular</label>
        <p id="celular">{user.phoneNumber===0?"--":user.phoneNumbe}</p>

        <label for="direccion">Dirección</label>
        <p id="direccion">--</p>

        <label for="identificacion">Número de Identificación</label>
        <p id="identificacion">{user.dni===0?"--":user.dni}</p>

      </div>
    </div>


    {/* <!-- Contenido de la pestaña "Editar" --> */}
    <div id="contenido-editar" class="tab-content" >
      <form id="editar-form"  class="edit-form dashboard">
        <h3>Editar Perfil</h3>
        {/* <!-- Campos de información personal --> */}
        <label for="nombre-edit">Nombre</label>
        <input type="text" id="nombre-edit" name="nombre-edit" required />

        <label for="correo-edit">Correo Electrónico</label>
        <input type="email" id="correo-edit" name="correo-edit" required />

        <label for="telefono-edit">Teléfono</label>
        <input type="tel" id="telefono-edit" name="telefono-edit" />

        <label for="direccion-edit">Dirección</label>
        <input type="text" id="direccion-edit" name="direccion-edit" />

        <label for="celular-edit">Celular</label>
        <input type="tel" id="celular-edit" name="celular-edit" />

        <label for="identificacion-edit">Número de Identificación</label>
        <input type="text" id="identificacion-edit" name="identificacion-edit" />

        {/* <!-- Cambiar Contraseña --> */}
        <h3>Cambiar Contraseña</h3>

        <label for="current-password-edit">Contraseña Actual:</label>
        <input type="password" id="current-password-edit" name="current-password-edit" required />

        <label for="new-password-edit">Nueva Contraseña:</label>
        <input type="password" id="new-password-edit" name="new-password-edit" required />

        <label for="confirm-password-edit">Confirmar Contraseña:</label>
        <input type="password" id="confirm-password-edit" name="confirm-password-edit" required />
        <button type="submit">Guardar Cambios</button>

      </form>
    </div>
  </>
}

export default Profile;