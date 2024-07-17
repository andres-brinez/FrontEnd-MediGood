// TODO: Mejorar los estilos que por el momentos son tomados del profile con la clase profile-info
function DetailUser() {
  return <>
    <div class="container-header">
      <h2 class="title">Detalle de usuario</h2>
    </div>
    {/*             <!-- Información del usuario --> */}
    <div class="profile-info" id="contenido-ver">
      <h3>Información</h3>

      <label for="id">Id</label>
      <p id="id">123456</p>

      <label for="user-email">Correo Electrónico</label>
      <p id="user-email">correo@ejemplo.com</p>

      <label for="user-name">Nombre</label>
      <p id="user-name">Nombre del Usuario</p>

      <label for="user-phone">Teléfono</label>
      <p id="user-phone">+1234567890</p>

      <label for="user-address">Dirección</label>
      <p id="user-address">Dirección del Usuario</p>

      <label for="user-status">Estado</label>
      <p id="user-status">Activo</p>

      <label for="user-role">Rol</label>
      <p id="user-role">Usuario</p>
    </div>
  </>
}

export default DetailUser;