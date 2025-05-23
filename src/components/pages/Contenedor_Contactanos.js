import React from 'react';

import banner from '../img/img-contactanos.png';
import '../Style/Contactanos.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Contenedor_contactanos() {
    return (
        <div id="Contactanos">
            <div className='apartado-banner'>
                <h3>Contáctanos</h3>
                <img src={banner} className="bannerimg2" alt="Nuestro equipo" />
            </div>

            <div className='contac'>
                <div className='contenedor-contact'>
                    <div className='circulo-contact'>
                       <a> <FontAwesomeIcon icon={faEnvelope} className="icono-contacto" id='Correo' size="4x" color="white" /></a>
                    </div>
                    <h3>CorreoPrueba@prueba.com</h3>
                </div>

                <div className='contenedor-contact'>
                    <div className='circulo-contact'>
                        <a href="https://wa.me/51991117783"target="_blank"rel="noopener noreferrer">  
                            <FontAwesomeIcon icon={faWhatsapp} className="icono-contacto" id='Whatss' size="4x" color="white" />
                        </a>
                    </div>
                    <h3>Click Aqui</h3>
                </div>

                <div className='contenedor-contact'>
                    <div className='circulo-contact'>
                       <a>  <FontAwesomeIcon icon={faPhone} className="icono-contacto" id='Cell' size="4x" color="white" /></a>
                    </div>
                    <h3>+51 999 999 999</h3>
                </div>
            </div>
        </div>
    );
}

export default Contenedor_contactanos;