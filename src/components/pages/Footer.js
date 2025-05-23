import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter  , faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos correctos

import { HashLink } from 'react-router-hash-link'; // para llamar apartados de una misma pagina 
import { Link } from 'react-router-dom'; // Importa Link de React Router


import '../Style/Footer.css';

function Footer() {
  return (
    <div className='Contenedor-footer'>
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Reisen Go
                </h6>
                <p>
                  Especialistas en asesoría de exportación de repuestos automotrices. Brindamos orientación experta para facilitar la salida eficiente y legal de productos hacia mercados internacionales.
                </p>
              </div>

              {/* Grid column */}


              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Redirecciones</h6>
                  <p><HashLink to="/#Inicio" className="link-footer">Inicio</HashLink></p>
                  <p><HashLink to="/#servicioss" className="link-footer">Servicios</HashLink></p>
                  <p><HashLink to="/#Nosotros" className="link-footer">Nosotros</HashLink></p>
                  <p><HashLink to="/#Contactanos" className="link-footer">Contáctanos</HashLink></p>
              </div>

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p><i className="fas fa-home me-3"></i> Lima, Lima, Perú</p>
                <p><i className="fas fa-envelope me-3"></i> GAAA@gmail.com</p>
                <p><i className="fas fa-phone me-3"></i> + 51 999 999 999</p>
              </div>
            </div>
          </div>
        </section>

        <hr />
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom section-redes">
          <div className="me-5 d-none d-lg-block">
            <span>Conéctate con nosotros en nuestras redes sociales:</span>
          </div>

          {/* Right - Redes sociales */}
          <div className="d-flex justify-content-center ">
          <a href="https://www.facebook.com" className="me-4 text-reset">
            <FontAwesomeIcon icon={faFacebookF} size="2x" />
          </a>
            <a href="https://www.x.com" className="me-4 text-reset">
            <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="me-4 text-reset">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
        </section>

        <div className="text-center p-4 Copyr" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2025 Copyright:
          <a className="text-reset fw-bold" href="https://github.com/Elbuffa99"> Github/Elbuffa99 </a><FontAwesomeIcon icon={faGithub} size="" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
