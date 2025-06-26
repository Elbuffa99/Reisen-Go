import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import banner from '../img/AutoBanner.png';
import asesoria from '../img/asesoria.png';
import contactanos from '../img/contactanos.png';
import entrega from '../img/entrega.png';
import envios from '../img/envios.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

import '@fontsource/noto-sans';
import '@fontsource/bebas-neue';


import Logos from './LogoCarouselBootstrap';
import ContService from './Conteiner_Servicios';


import '../Style/Inicio.css'    


function Inicio() {
    useEffect(()   => {
    AOS.init({
      duration: 1000, // duración de la animación en ms
      once: true      // se ejecuta solo una vez
    });
  }, []);
  return (  
    <div className='Cont-total' id='Inicio'>  

      <div className="Conteiner-Banner-Inicial">
        <img src={banner} className="img-banneri_ini" alt="Vehículo Moderno" />
        <div className="banner-texto" data-aos="fade-up">
          <h3>Importamos repuestos, maquinaria, tecnología y productos personales desde EE.UU., Europa y Asia. Asesoría personalizada y entrega directa.</h3>
          <h2>¡COTIZA CON NOSOTROS Y AL MEJOR PRECIO!</h2>
          <div className='Cont-cotiza'>
            <a href="https://wa.me/51913578485" target="_blank" rel="noopener noreferrer" >Cotiza Aquí</a>
          </div>
        </div>
      </div>

      <div className='Pasos-import'>
          <h1>PASOS PARA IMPORTAR CON REISENGO</h1>
          <div className='contenedor-pasos'data-aos="zoom-in">
              <div className='circulo-pasos'>
                <img src={contactanos} className="img-pasos" alt="Contactanos" />
              </div>
              <h3>1. CONTACTANOS</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=contacto@reisengo.com&su=Consulta" target="_blank" rel="noopener noreferrer" className="boton-contacto">contacto@reisengo.com  </a>
              </div>
              <a href="https://wa.me/51913578485" target="_blank" rel="noopener noreferrer" className='boton-contacto'>+51 913 578 485</a>
          </div>
          <div className='contenedor-pasos'data-aos="zoom-in">
              <div className='circulo-pasos'>
                <img src={asesoria} className="img-pasos" alt="Te asesoramos" />
              </div>
              <h3>2.ASESORÍA PERSONALIZADA</h3>
              <p>Uno de nuestros asesores comerciales te atenderá y te guiará en todo el proceso de compra e importación.</p>
          </div>
          <div className='contenedor-pasos'data-aos="zoom-in">
              <div className='circulo-pasos'>
                <img src={envios} className="img-pasos" alt="Envios" />
              </div>
              <h3>3. ENVÍO A NUESTROS ALMACENES</h3>
              <p>Una vez confirmada tu compra, tu pedido será enviado a nuestro almacén en Estados Unidos, donde lo preparamos para su translado a Perú.</p>
          </div>
          <div className='contenedor-pasos'data-aos="zoom-in">
              <div className='circulo-pasos'>
                <img src={entrega} className="img-pasos" alt="Entrega a domicilio" />                
              </div>
              <h3>4. ENTREGA A DOMICILIO</h3>
              <p>Cuando el producto llegue a nuestro almacén en Perú, nuestro equipo de despacho lo entregará directamente a la dirección que nos indiques.</p>
          </div>
      </div>

        <ContService/>
          <Logos/>  


    </div>    
  );
}

export default Inicio;
