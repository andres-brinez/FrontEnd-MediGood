import { Link } from "react-router-dom";
import "./style.css"

const FooterHome = () => {
  return <>
    <footer>
      <div className="footer-section">
        <div className="footer-subsection">
          <img className="footer-logo" src="img/home/logo farmacia.png" alt="Logo" />
          <p>Somos expertos en farmacia y para farmacia. Trabajamos para las mejores marcas. Nuestra mayor prioridad es la atención personalizada a nuestros clientes.</p>
        </div>
        <div className="footer-subsection">
          <h3>¿Necesitas ayuda?</h3>
          <p className="contacto"><img src="img/home/contacto/phone.svg" alt="Teléfono" /> 942 357 164</p>
          <p className="contacto"><img src="img/home/contacto/whatsapp.svg" alt="Whatsapp" /> 31032593266</p>
          <p className="contacto"><img src="img/home/contacto/email.svg" alt="Email" /> brinezlopez08@gmail.com</p>
          <p className="contacto"><img src="img/home/contacto/oclock.svg" alt="Horario" /> L-J: 9-14h / 17-20h | V: 8-14h</p>
        </div>
        <div className="footer-subsection">
          <h3>Información</h3>
          <a href="contacto.html">Contacta con nosotros</a>
          <a href="quienes-somos.html">Quiénes somos</a>
          <div className="redes-sociales">
            <Link to="#"><img src="img/home/redes/facebook-1.svg" alt="Facebook" /></Link>
            <Link to="#"><img src="img/home/redes/twitter-1.svg" alt="Twitter" /></Link>
            <Link to="#"><img src="img/home/redes/instagram-1.svg" alt="Instagram" /></Link>
            <Link to="#"><img src="img/home/redes/logotipo-de-youtube-1.svg" alt="YouTube" /></Link>

          </div>
        </div>
        <div className="footer-subsection">
          <h3>Compra</h3>

          <Link to="#">Super-descuentos / Cupones</Link>
          <Link to="#">En Oferta</Link>
          <Link to="#">Envíos</Link>
          <Link to="#">Devoluciones</Link>

        </div>
      </div>
      <div className="footer-bottom">
        <p>2023-2024 Medigood S.L.By Andres Briñez</p>
        <div className="footer-links">
          <Link to="#">Aviso Legal</Link>
          <Link to="#">Política de Cookies</Link>
          <Link to="#">Política de Privacidad</Link>
        </div>
      </div>

    </footer>
  </>
}

export default FooterHome;