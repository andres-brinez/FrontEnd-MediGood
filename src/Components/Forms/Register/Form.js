import "./style.css"
function FormRegister() {
  function changeVisibilityPassword() {
    var passwordInput = document.getElementById('password');
    var togglePassword = document.getElementById('togglePassword');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.textContent = 'Ocultar';
    } else {
      passwordInput.type = 'password';
      togglePassword.textContent = 'Mostrar';
    }
  }

  return <form id="createAccountForm">
    <div class="input-field">
      <label for="name">Nombre y apellidos <span class="required">*</span></label>
      <input type="text" id="name" name="name" placeholder="Nombre completo" required />
    </div>
    <div class="input-field">
      <label for="email">Correo electrónico <span class="required">*</span></label>
      <input type="email" id="email" name="email" required placeholder="Correo electrónico" />
    </div>
    <div class="input-field">
      <label for="password">Contraseña <span class="required">*</span></label>
      <div class="password-container">
        <input type="password" id="password" name="password" required placeholder="Contraseña" />
        <span id="togglePassword" onClick={changeVisibilityPassword} >Mostrar</span>
      </div>
    </div>
    <div class="input-field-checkbox">
      <input type="checkbox" id="acceptPrivacyPolicy" name="acceptPrivacyPolicy" required />
      <label for="acceptPrivacyPolicy">He leído y acepto política de privacidad</label>
    </div>
    <div class="input-field-checkbox">
      <input type="checkbox" id="receiveOffers" name="receiveOffers" />
      <label for="receiveOffers">Me gustaría recibir descuentos exclusivos  </label>
    </div>

    <button type="submit">Registrarse</button>
  </form>
 

}

export default FormRegister;