import React from 'react';
import '../Style/Contactanos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';



function Contenedor_contactanos() {
            useEffect(()   => {
        AOS.init({
          duration: 1000, // duración de la animación en ms
          once: true      // se ejecuta solo una vez
        });
      }, []);
    return (
        <div id="Contactanos">
            <div className="contactanos-header">
                <h3>Contáctanos</h3>
                <p>Estamos aquí para ayudarte. Elige el medio que prefieras</p>
            </div>

            <div className='contac' data-aos="flip-down">

                <div className='card-contacto'>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@reisengo.com&su=Consulta" target="_blank" rel="noopener noreferrer">
                        <div className='circulo-contact'>
                            <FontAwesomeIcon icon={faEnvelope} className="icono-contacto" id='Correo' />
                            <span className="texto-icono">Haz click aquí</span>
                        </div>
                    </a>
                    <h3 className='titulo-contacto'>Correo</h3>
                    <p>contacto@reisengo.com</p>
                </div>

                <div className='card-contacto'>
                    <a href="https://wa.me/51913578485" target="_blank" rel="noopener noreferrer">
                        <div className='circulo-contact'>
                            <FontAwesomeIcon icon={faWhatsapp} className="icono-contacto" id='Whatss' />
                            <span className="texto-icono">Haz click aquí</span>
                        </div>
                    </a>
                    <h3 className='titulo-contacto'>WhatsApp</h3>
                    <p>+51 913 578 485</p>
                </div>

                <div className='card-contacto'>
                    <a href="tel:+51913578485">
                        <div className='circulo-contact'>
                            <FontAwesomeIcon icon={faPhone} className="icono-contacto" id='Cell' />
                            <span className="texto-icono">Haz click aquí</span>
                        </div>
                    </a>
                    <h3 className='titulo-contacto'>Teléfono</h3>
                     <p>+51 913 578 485</p>
                </div>

                <div className='card-contacto'>
                    <div className='circulo-contact'>
                        <FontAwesomeIcon icon={faLocationDot} className="icono-contacto" id='Ubicacion' />
                        <span className="texto-icono">Estamos aquí</span>
                    </div>
                    <h3 className='titulo-contacto'>Dirección</h3>
                     <p>Malecón de la Marina 150, Miraflores</p>
                </div>

            </div>
        </div>
    );
}

export default Contenedor_contactanos;
