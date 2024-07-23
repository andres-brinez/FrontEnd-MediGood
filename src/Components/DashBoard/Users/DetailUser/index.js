import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByEmail } from "../../../../services/users";

// TODO: Mejorar los estilos que por el momentos son tomados del profile con la clase profile-info
function DetailUser() {

  const  {id} = useParams();

  // email,name,phoneNumber,address,role,status
  const [email,setEmail]= useState("")
  const [name,setName]= useState("")
  const [phoneNumber,setPhoneNumber]= useState("")
  const [address,setAddress]= useState("")
  const [role,setRole]= useState("")
  const [status,setStatus]= useState("")

  useEffect(()=>{
    getUserByEmail(id).then((response)=>{
      console.log(response)
      setEmail(response.email)
      setName(response.name)
      setPhoneNumber(response.phoneNumber)
      setAddress(response.address)
      setRole(response.role)
      setStatus(response.enabled)

    })
  },[])

  return <>
    <div class="container-header">
      <h2 class="title">Detalle de usuario</h2>
    </div>
    {/*             <!-- Información del usuario --> */}
    <div class="profile-info" id="contenido-ver">
      <h3>Información</h3>

      <label for="id">Email</label>
      <p id="id">{email}</p>

      <label for="user-name">Nombre</label>
      <p id="user-name">{name}</p>

      <label for="user-phone">Teléfono</label>
      <p id="user-phone">{phoneNumber}</p>

      <label for="user-address">Dirección</label>
      <p id="user-address">{address}</p>

      <label for="user-status">Estado</label>
      <p id="user-status">{status?"Activo":"Inactivo"}</p>

      <label for="user-role">Rol</label>
      <p id="user-role">{role==="Admin"?"Administrador":"Usuario"}</p>
    </div>
  </>
}

export default DetailUser;