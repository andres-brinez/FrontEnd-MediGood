import { useState } from "react";
import { createUser } from "../../../../services/users";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  const navigator = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const userInformation = {
      email,
      name,
      password,
      rol
    }

    createUser(userInformation).then((response) => {
      if (!response) {
        alert("El usuario ya existe")
      }
      else {
        alert("Usuario creado correctamente")
        navigator("/dashboard/users")

      }
    })

  }

  return <>
    <div className="container-header">
      <h2 className="title">Agregar usuario</h2>
    </div>

    <form onSubmit={handleSubmit} className="dashboard">
      <h3>Ingresa los siguientes datos</h3>

      <label for="email">Correo Electrónico</label>
      <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" id="email" name="email" required />

      <label for="nombre">Nombre</label>
      <input value={name} onChange={(event) => setName(event.target.value)} type="text" id="nombre" name="nombre" required />

      <label for="password">Contraseña</label>
      <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" id="password" name="password" required />

      <label for="rol">Rol</label>
      <select value={rol} onChange={(event) => setRol(event.target.value)} id="rol" name="rol" required>
        <option value="USER">Usuario</option>
        <option value="ADMIN">Administrador</option>
      </select>


      {/* <label for="estado">Estado</label>
      <select id="estado" name="estado" required>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select> */}


      <button type="submit">Guardar Cambios</button>
    </form>
  </>
}

export default AddUser;