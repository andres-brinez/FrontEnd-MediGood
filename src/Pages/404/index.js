import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Page404 = () => {
  return (
    <div className="page-404__container">
      <div className="page-404__content">
        <h1 className="page-404__title">404</h1>
        <h2 className="page-404__subtitle">Página no encontrada</h2>
        <p className="page-404__description">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Link to="/" className="page-404__link">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Page404;
