import { NavLink } from "react-router-dom";
import FormRegister from "../../Components/Forms/Register/Form";
import Footer from "../../Components/Footer/Auth";
import HeaderAuth from "../../Components/Header/Auth/Header";
import "./style.css"

function Register(datod) {

  
  return (
    <>
      <HeaderAuth text="Registro seguro" />
      <section className="register">
        <article className="benefits__container">
          <h3>Registrarse en Farmacia Medigood es muy facil y está lleno de beneficios</h3>
          <ul>
            <li><img src="/check.svg" alt="Palomita" /> <span className="bold">$10.000</span> de descuento en tu
              <span className="bold"> primer pedido*</span>.
            </li>
            <li><img src="/check.svg" alt="Palomita" /> <span className="bold">Aquiere</span> rápidamente los mejores
              productos</li>
            <li><img src="/check.svg" alt="Palomita" /> <span className="bold">Guarda</span> tus productos favoritos.
            </li>
            <li><img src="/check.svg" alt="Palomita" /> <span className="bold">Gestiona tus</span> pedidos.</li>
            <li><img src="/check.svg" alt="Palomita" /> <span className="bold">Guarda tus</span> productos favoritos.
            </li>
            <li><img src="/check.svg" alt="Palomita" /> <span className="bold">Aprovecha</span> ofertas exclusivas.
            </li>
            <li>
              <p>* Pedidos con importe superior a 10.000 usando el cupón <strong>"BIENVENIDA"</strong>.</p>
            </li>
          </ul>
          <div className="back-to-shop">
            <NavLink to="/">
              <span>&lt;</span>
              <p>Volver a la tienda</p>
            </NavLink>
          </div>

        </article>
        <article className="account__container">
          <h3>Crea una cuenta</h3>
          <FormRegister />
          <p className=""><span className="required">*</span>Campos obligatorios</p>
          <div className="existing__account">
            <div className="line"></div>
            <p>Ya tienes cuenta</p>
            <div className="line"></div>
          </div>
          <NavLink className="buttonAuth" to="/login">Iniciar sesión</NavLink>
        </article>
      </section>
      <Footer />
    </>
  );

}

export default Register;
