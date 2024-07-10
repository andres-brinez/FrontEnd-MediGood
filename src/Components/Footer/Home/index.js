import "./style.css"

const FooterHome = () => {
  return <>
    <footer>
      <div class="footer-section">
        <div class="footer-subsection">
          <img class="footer-logo" src="img/home/logo farmacia.png" alt="Logo"/>
            <p>Somos expertos en farmacia y para farmacia. Trabajamos para las mejores marcas. Nuestra mayor prioridad es la atención personalizada a nuestros clientes.</p>
        </div>
        <div class="footer-subsection">
          <h3>¿Necesitas ayuda?</h3>
          <p class="contacto"><img src="img/home/contacto/phone.svg" alt="Teléfono"/> 942 357 164</p>
          <p class="contacto"><img src="img/home/contacto/whatsapp.svg" alt="Whatsapp"/> 31032593266</p>
          <p class="contacto"><img src="img/home/contacto/email.svg" alt="Email"/> brinezlopez08@gmail.com</p>
          <p class="contacto"><img src="img/home/contacto/oclock.svg" alt="Horario"/> L-J: 9-14h / 17-20h | V: 8-14h</p>
        </div>
        <div class="footer-subsection">
          <h3>Información</h3>
          <a href="contacto.html">Contacta con nosotros</a>
          <a href="quienes-somos.html">Quiénes somos</a>
          <div class="redes-sociales">
            <a href="#"><img src="img/home/redes/facebook-1.svg" alt="Facebook"/></a>
            <a href="#"><img src="img/home/redes/twitter-1.svg" alt="Twitter"/></a>
            <a href="#"><img src="img/home/redes/instagram-1.svg" alt="Instagram"/></a>
            <a href="#"><img src="img/home/redes/logotipo-de-youtube-1.svg" alt="YouTube"/></a>
          </div>
        </div>
        <div class="footer-subsection">
          <h3>Compra</h3>
          <a href="#">Super-descuentos / Cupones</a>
          <a href="#">En Oferta</a>
          <a href="#">Envíos</a>
          <a href="#">Devoluciones</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>2023-2024 Medigood S.L.By Andres Briñez</p>
        <div class="footer-links">
          <a href="#">Aviso Legal</a>
          <a href="#">Política de Cookies</a>
          <a href="#">Política de Privacidad</a>
        </div>
      </div>

    </footer>
  </>
}

export default FooterHome;