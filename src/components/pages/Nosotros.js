import React from 'react';
import '../Style/Nosotros.css';

import Door from '../img/mision.png';
import Door2 from '../img/vision.png';
import banner from '../img/img-nosotros.png'

function Nosotros() {
  return (
    <section id='Nosotros'>
      <div className='apartado-banner'>
      <h3>Sobre Nosotros</h3>
      <img src={banner} className="bannerimg2" alt="Nuestro equipo" /> 
      </div>
    <div id="nosotros" className="nosotros-section">
      <div className="nosotros-item">
        <img src={Door} alt="Nuestro equipo" />     
        <div className="color1-2"><h2>Misión</h2></div> 
        <p>
           Somos una empresa importadora de repuestos vehiculares, especializada en ofrecer productos de alta calidad para una amplia variedad de marcas y modelos, desde autos comunes hasta vehículos de alta gama. Traemos repuestos desde EE. UU. y Europa, con precios competitivos, atención personalizada y entregas confiables.
        </p>
         
      </div>
      <div className="nosotros-item">
          <img src={Door2} alt="Nuestro equipo" />
        <div className="color1-2"><h2>Visión</h2></div>       
        <p>
          Ser la empresa líder en Perú en la importación de repuestos vehiculares, reconocida por la variedad de productos, la excelencia en el servicio y la confiabilidad en cada entrega. Aspiramos a consolidarnos como el proveedor más confiable, superando expectativas y fortaleciendo el sector automotriz.
        </p>
      
      </div>
      </div>
    </section>
  );
}

export default Nosotros;
