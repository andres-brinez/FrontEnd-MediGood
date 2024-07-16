import InputPassword from "../Fields/Password";
import Input from "../Fields/Input/input";
import "./style.css"
import CheckBox from "../Fields/CheckBox";
import { useState, } from "react";
import { useNavigate } from "react-router-dom";
function FormRegister() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator=useNavigate()

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
    navigator('/login');
    let datosEnviar = {
      name,
      email,
      password
    }

  };


 

  return (
    <form onSubmit={handleSubmit} id="createAccountForm">
      <Input
        className="input-field"
        label="Nombre y apellidos"
        id="name"
        name="name"
        placeholder="Nombre completo"
        required
        value={name} updateValue={setName} />
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
      <CheckBox className="input-field-checkbox" type="checkbox" label="He leído y acepto política de privacidad" id="acceptPrivacyPolicy" name="acceptPrivacyPolicy" />
      <CheckBox className="input-field-checkbox" type="checkbox" label="Me gustaría recibir descuentos exclusivos" id="receiveOffers" name="receiveOffers" />
      {/* <Button type="submit" text="Registrarse" /> */}
      <button type="submit">Registrarse</button>
    </form>
  )
}

export default FormRegister;