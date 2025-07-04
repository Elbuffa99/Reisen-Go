import React from 'react';

import Door from '../img/Door.jpg';
import Asesoria from '../img/AsesoriaPersonalizada.jpg';
import Deli from '../img/Delivary.jpg';
import banner from '../img/img-servicio.png';


import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../Style/Conteiner_Servicios.css'

function Conteiner_Servicios() 
{
        useEffect(()   => {
        AOS.init({
          duration: 1000, // duración de la animación en ms
          once: true      // se ejecuta solo una vez
        });
      }, []);

    return(
        <div id='servicioss'>
            
        <div className='cont-title-serv'>
            <h1>Servicios</h1>
        </div>
        <section id='servicios'> 
            <div className="content-centro">
                
            <div className="card"data-aos="fade-right">
                <img src={Door} className="card-img-top" alt="Imagen Door"/>
                <div className="card-body">
                <h5 className="card-title">Importación Door to Door</h5>
                <p className="card-text">Gestionamos todo el proceso logístico para la importación de repuestos vehiculares desde el extranjero hasta tu domicilio o taller, asegurando entregas en Lima Metropolitana y provincias, sin trámites adicionales.</p>
                </div>
            </div>
        
            <div className="card"data-aos="fade-down">
                <img src={Asesoria} className="card-img-top" alt="Imagen asesoria"/>
                <div className="card-body">
                <h5 className="card-title">Asesoría Personalizada</h5>
                <p className="card-text">Ofrecemos orientación experta para ayudarte a seleccionar los repuestos más adecuados para tu vehículo, ya sean Genuinos, OEM o Aftermarket, garantizando compatibilidad y calidad.</p>
                </div>
            </div>
        
            <div className="card"data-aos="fade-left">
                <img src={Deli} className="card-img-top" alt="imagen Delivery"/>
                <div className="card-body">
                <h5 className="card-title">Entregas Rápidas</h5>
                <p className="card-text">Nos comprometemos a realizar entregas eficientes en un plazo máximo de 15 días, brindándote soluciones rápidas y confiables para mantener tu vehículo en óptimas condiciones.</p>
                </div>
            </div>

            </div>
            {/* Fin apartados del centro */}
        
            {/* Inicio apartados del lado derecho */}
            <div className="content-derecha">
            </div>
            {/* Fin apartados del lado derecho */}
        </section> 
        </div>
    )
}
export default Conteiner_Servicios;