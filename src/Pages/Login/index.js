import { NavLink } from "react-router-dom";
import Footer from "../../Components/Footer/Auth";
import FormLogin from "../../Components/Forms/Login";
import HeaderAuth from "../../Components/Header/Auth/Header";
import "./style.css"

const Login = () => {
    return <>
        <HeaderAuth text="Inicio seguro" />
        <main className="login-main">
            {/* <!-- Primer contenedor con el saludo de bienvenida --> */}
            <div className="container">
                <h3>¿Ya tienes cuenta?</h3>
                <p><strong>¡Bienvenido de nuevo!</strong> Estamos emocionados de verte otra vez.<br />Por favor, inicia sesión
                    para continuar.</p>
                <div className="back-to-shop">
                    <NavLink to="/">
                        <span>&lt;</span>
                        <p>Volver a la tienda</p>
                    </NavLink>
                </div>
            </div>

            {/* <!-- Segundo contenedor con el formulario de inicio de sesión --> */}
            <div className="login-container">
                <h3>Iniciar sesión</h3>
                <div className="social-login">
                    <button id="button-facebook"className="login-button" type="button">
                        
                            <NavLink to="#"><img src="img/socialMedia/facebook.svg" alt="Facebook" />Facebook</NavLink>
                    </button>
                    <button id="button-google" className="login-button" type="button">
                            <NavLink to="#"><img src="img/socialMedia/google.svg" alt="Google" />Google</NavLink>
                    </button>
                </div>
                <div className="separator">
                    <div className="line"></div>
                    <p>O</p>
                    <div className="line"></div>
                </div>
                <FormLogin />
                <div className="separator">
                    <div className="line"></div>
                    <p>¿Eres un nuevo cliente?</p>
                    <div className="line"></div>
                </div>
                <NavLink className="buttonAuth" to="/register">Crear cuenta</NavLink>
            </div>
        </main>
        <Footer />
    </>
}

export default Login;