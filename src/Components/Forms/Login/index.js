import InputPassword from "../Fields/Password";
import Input from "../Fields/Input/input";
import { useState } from "react";
import Button from "../button";
import "./style.css"
function FormLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Formulario enviado');

    let datosEnviar = {
      email,
      password
    }


  };

  return (
    <form onSubmit={handleSubmit} id="createAccountForm">

      <Input
        className="input-field"
        type="email"
        label="Correo electrónico"
        id="email"
        name="email"
        placeholder="Correo electrónico"
        required
        value={email} updateValue={setEmail} />
      <InputPassword
        className="input-field"
        type="password"
        label="Contraseña"
        id="password"
        name="password"
        placeholder="Contraseña"
        onClick={changeVisibilityPassword}
        required
        value={password} updateValue={setPassword} />

      <a href="" disabled >¿Olvidó su contraseña?</a>
      <button type="submit"> Iniciar sesión </button>

    </form>
  )
}

export default FormLogin;