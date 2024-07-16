import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

const Nav = () => {
  // LOs a para por link y to
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
          >
            Registro
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
          >
            Acerca de
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
