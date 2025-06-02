import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter  , faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importa los iconos correctos
import {   faPhone, faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



import { HashLink } from 'react-router-hash-link'; // para llamar apartados de una misma pagina 
import { Link } from 'react-router-dom'; // Importa Link de React Router


import '../Style/Footer.css';

function Footer() {
  return (
    <div className='Contenedor-footer'>
      <footer className="">
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

              {/* Grid column - Contacto Unificado */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>

                <p>
                  <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
                  Escribenos:&nbsp;
                  <a href="https://wa.me/51987654321" target="_blank" rel="noopener noreferrer">
                    +51 987 654 321
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                  CorreoPrueba@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-3" />
                  Llámanos:&nbsp; 
                  <a href="tel:+51999999999">
                    +51 999 999 999
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
                  Dirección: Jr.Prueba 765 La Molina;
                </p>
                
              </div>

              {/* Grid column */}     
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Atención</h6>
                <p>
                  Lunes - Viernes
                </p>
                <p>
                  10 am - 8 pm
                </p>
              </div>
             
            </div>
          </div>
        </section>

        <hr />
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom section-redes">
          <div className="me-5 d-none d-lg-block">
            <span>Siguenos en nuestras redes sociales:</span>
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
          <a className="text-reset fw-bold" href="https://github.com/Elbuffa99" target="_blank"> Github/Elbuffa99 </a><FontAwesomeIcon icon={faGithub} size="" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
