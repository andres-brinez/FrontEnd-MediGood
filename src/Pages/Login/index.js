import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer";
import FormLogin from "../../Components/Forms/Login";
import HeaderAuth from "../../Components/Header/Auth/Header";
import "./style.css"
import Button from "../../Components/Forms/button";

const Login = () => {
    return <>
        <HeaderAuth text="Inicio seguro" />
        <main className="login-main">
            {/* <!-- Primer contenedor con el saludo de bienvenida --> */}
            <div className="container">
                <h3>¿Ya tienes cuenta?</h3>
                <p><strong>¡Bienvenido de nuevo!</strong> Estamos emocionados de verte otra vez.<br />Por favor, inicia sesión
                    para continuar.</p>
                <div class="back-to-shop">
                        <NavLink to="/">
                            <span>&lt;</span>
                            <p>Volver a la tienda</p>
                        </NavLink>
                </div>
            </div>

            {/* <!-- Segundo contenedor con el formulario de inicio de sesión --> */}
            <div class="login-container">
                <h3>Iniciar sesión</h3>
                <div class="social-login">
                    <button id="button-facebook" type="button">
                        <a href=""> <img src="img/socialMedia/facebook.svg" alt="Facebook" />
                            Facebook</a>
                    </button>
                    <button id="button-google" type="button">
                        <a href=""><img src="img/socialMedia/google.svg" alt="Google" />
                            Google</a>
                    </button>
                </div>
                <div class="separator">
                    <div class="line"></div>
                    <p>O</p>
                    <div class="line"></div>
                </div>
                <FormLogin />
                <div class="separator">
                    <div class="line"></div>
                    <p>¿Eres un nuevo cliente?</p>
                    <div class="line"></div>
                </div>
                <NavLink className="buttonAuth" to="/register">Crear cuenta</NavLink>
            </div>
        </main>
        <Footer />
    </>
}

export default Login;