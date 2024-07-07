import FormRegister from "../../Components/Forms/Register/Form";
import Button from "../../Components/Forms/button";
import HeaderAuth from "../../Components/Header/Auth/Header";
import "./style.css"
function Register(datod) {

  return (
    <div>
      <HeaderAuth />
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
          <div class="back-to-shop">
            <a href="ruta/a/la/tienda">
              <span>&lt;</span>
              <p>Volver a la tienda</p>
            </a>
          </div>
        </article>
        <article className="account__container">
          <h3>Crea una cuenta</h3>
          <FormRegister />
          <p class=""><span class="required">*</span>Campos obligatorios</p>
          <div class="existing__account">
            <div class="line"></div>
            <p>Ya tienes cuenta</p>
            <div class="line"></div>
          </div>
          <Button ruta={"login"}  type="button" text="Iniciar sesión "/>
        </article>
      </section>
      <footer>
        <p>©2024 Farmacia Medigood S.L.</p>
        <p>Andres Felipe Briñez Lopez</p>
      </footer>
    </div>
  );

}

export default Register;
