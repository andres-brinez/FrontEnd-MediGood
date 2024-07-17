function EditUser() {
  return <>
    <div class="container-header">
      <h2 class="title">Editar usuario</h2>
    </div>

    <form className="dashboard">
      <h3>Ingresa los siguientes datos</h3>

      <label for="email">Correo Electrónico</label>
      <input type="email" id="email" name="email" required />

      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre" required />

      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" name="telefono" required />

      <label for="direccion">Dirección</label>
      <input type="text" id="direccion" name="direccion" required />

      <label for="estado">Estado</label>
      <select id="estado" name="estado" required>
        <option value="activo">Activo</option>
        <option value="inactivo">Inactivo</option>
      </select>

      <label for="rol">Rol</label>
      <select id="rol" name="rol" required>
        <option value="usuario">Usuario</option>
        <option value="administrador">Administrador</option>
      </select>

      <button type="submit">Guardar Cambios</button>
    </form>
  </>
}

export default EditUser;