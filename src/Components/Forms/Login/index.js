import InputPassword from "../Fields/Password";
import Input from "../Fields/Input/input";
import { useContext, useState } from "react";
import "./style.css"
import { useNavigate } from "react-router-dom";
import { authServiceLogin } from "../../../services/authService";
import { jwtDecode } from "jwt-decode";
import { GlobalContext } from "../../../Context/GlobalContext";

function FormLogin() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { emailUser,setEmailUser} = useContext(GlobalContext);

  
  const navigate=useNavigate();

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

    let datosEnviar = {
      email,
      password
    }

    authServiceLogin(datosEnviar).then((response)=>{
      console.log(response)
      const token = response;

      if(token){
        const decodedToken = jwtDecode(token);
        const {email,role}= decodedToken
        console.log(decodedToken)
        alert("El usuario con email "+ email + " tiene el rol " + role);
        navigate("/")
        setEmailUser(email)
      }
      else{
        alert("No se pudo iniciar sesión, credenciales incorrectas")
      }


    })


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