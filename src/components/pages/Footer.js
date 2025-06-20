import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import '../Style/Footer.css';

function Footer() {
  return (
    <div className='Contenedor-footer'>
      <footer>
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Información de la empresa */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Reisen Go</h6>
                <p>
                  Especialistas en asesoría de exportación de repuestos automotrices. Brindamos orientación experta para facilitar la salida eficiente y legal de productos hacia mercados internacionales.
                </p>
              </div>

              {/* Contacto */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p>
                  <FontAwesomeIcon icon={faWhatsapp} className="me-3" />
                  WhatsApp:&nbsp;
                  <a href="https://wa.me/51913578485" target="_blank" rel="noopener noreferrer">
                    +51 913 578 485
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} className="me-3" />
                  contacto@reisengo.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="me-3" />
                  Llamadas:&nbsp;
                  <a href="tel:+51913578485">
                    +51 913 578 485
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />
                  Malecón de la Marina 150, Miraflores
                </p>
              </div>

              {/* Horario */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Atención</h6>
                <p>Lunes - Viernes</p>
                <p>10:00 am - 8:00 pm</p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* Redes sociales */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom section-redes">
          <div className="me-5 d-none d-lg-block">
            <span>Síguenos en nuestras redes sociales:</span>
          </div>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com/profile.php?id=61577753752703" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@reisen.go?_t=ZM-8xJhE4xxEYw&_r=1" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="https://www.instagram.com/reisen_go/" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </section>

        {/* Copyright */}
        <div className="text-center p-4 Copyr" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2025 Copyright:
          <a className="text-reset fw-bold" href="https://github.com/Elbuffa99" target="_blank" rel="noopener noreferrer">
            &nbsp;Github/Elbuffa99&nbsp;<FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
