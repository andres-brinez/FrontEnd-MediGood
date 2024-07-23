import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUserByEmail } from "../../../../services/users";

function EditUser() {

  const { id } = useParams();
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [role, setRole] = useState("")
  const [enabled, setEnabled] = useState("")

  const navigator =useNavigate();


  useEffect(() => {
    getUserByEmail(id).then((response) => {
      console.log(response)
      setName(response.name)
      setPhoneNumber(response.phoneNumber)
      setAddress(response.address)
      setRole(response.rol)
      setEnabled(response.enabled)

    })
  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      email:id,
      name,
      phoneNumber,
      address,
      rol:role,
      enabled
    }

    editUser(data).then((response) => {
      if (!response) {
        alert("No se pudo editar el usuario")
      }
      else {
        alert("Usuario editado correctamente")
        navigator("/dashboard/users")

      }
    })
  }
  return <>
    <div class="container-header">
      <h2 class="title">Editar usuario</h2>
    </div>

    <form onSubmit={handleSubmit} className="dashboard">
      <h3>Ingresa los siguientes datos</h3>

      <label for="email">Correo Electrónico</label>
      <input value={id}  type="email" id="email" name="email"  readOnly  />

      <label for="nombre">Nombre</label>
      <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="nombre" name="nombre" required />

      <label for="telefono">Teléfono</label>
      <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="number" id="telefono" name="telefono"  />

      <label for="direccion">Dirección</label>
      <input value={address} onChange={(e)=>setAddress(e.target.value)} type="text" id="direccion" name="direccion"  />

      {/* TODO: El estado por el momento no se puede modificar desde el api */}
      <label for="estado">Estado</label>
      <select value={enabled} onChange={(e)=>setEnabled(e.target.value)} id="estado" name="estado" >
        <option value={true}>Activo</option>
        <option value={false}>Inactivo</option>
      </select>

      <label for="rol">Rol</label>
      <select value={role} onChange={(e)=>setRole(e.target.value)} id="rol" name="rol" required>
        <option value="USER">Usuario</option>
        <option value="ADMIN">Administrador</option>
      </select>

      <button type="submit">Guardar Cambios</button>
    </form>
  </>
}

export default EditUser;