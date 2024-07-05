import "./style.css";
function HeaderAuth() {
  return (
    <header>
      <div className="header__container">
        <img className="header__logo" src="/img/header/logo.svg" alt="Logo de MediGooda" />
        <h1>MediGood</h1>
      </div>
      <div class="header__container">
        <p>REGISTRO SEGURO</p>
        <img className="header__secure-logo" src="/img/header/logoSecurity.svg" alt="Imagen de registro seguro" />
      </div>
    </header>
  );
}

export default HeaderAuth;