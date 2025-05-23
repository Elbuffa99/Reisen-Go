import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link'; // para llamar apartados de una misma pagina 
import { Link } from 'react-router-dom'; // Importa Link de React Router
import logo from '../img/logo.png';
import '../Style/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; // estos sí van aquí
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // esto va desde el paquete correcto
 // faBars: menú, faXmark: cerrar

function Nav() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="conteiner-nav">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Botón hamburguesa (solo en móvil) */}
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="2x" />
        </div>

        {/* Links de navegación */}
        <div className={`Conteiner-links ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
            <li><HashLink smooth to="/#Inicio">Inicio</HashLink></li> {/* Usa Link de React Router */}
            <li><HashLink to="/#servicioss">Servicios</HashLink></li>
            <li><HashLink to="/#Nosotros">Nosotros</HashLink></li>
            <li><HashLink to="/#Contactanos">Contacto</HashLink></li>
          </ul> 
        </div>

        {/* WhatsApp */}
        <div className="whatsapp-link">
          <a
            href="https://wa.me/51991117783"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
