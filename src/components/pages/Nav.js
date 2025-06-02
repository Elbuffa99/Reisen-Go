import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../Style/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav>
      <div className="conteiner-nav">
        {/* Grupo centrado: Logo + Enlaces */}
        <div className={`center-group ${menuOpen ? 'open' : ''}`}>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><HashLink smooth to="/#Inicio">Inicio</HashLink></li>
            <li><HashLink to="/#servicioss">Servicios</HashLink></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Menú hamburguesa */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="2x" />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
