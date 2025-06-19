import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

 import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';


import '@fontsource/noto-sans';
import '@fontsource/bebas-neue';

import confianza from '../img/confianza..jpg';
import personalizacion from '../img/personalizacion.jpg';
import transparencia from '../img/transparencia.jpg';
import logo from '../img/1.png';


import '../Style/Nosotros.css';


const comentarios = [
  { nombre: 'Miguel Cisneros', texto: 'Muy feliz con el guardafango y la suspensión neumática que me trajeron para mi Jeep Grand Cherokee Overland. Llegaron en 14 días, tal como se había prometido. ¡Recomendado!' },
  { nombre: 'Sofía Mendoza', texto: 'Empresa seria y confiable. Necesitaba una ECU para mi BMW X4 del 2013 y lograron encontrarla e importarla, ya que en Perú no la conseguía por ningún lado.' },
  { nombre: 'Adolfo Rodríguez', texto: 'Requería una cinta para la bolsa de aire de mi Mustang 2007. Reisen Go me la importó a un precio accesible y llegó en solo 15 días.' },
  { nombre: 'Junior Salazar', texto: 'Buscaba soportes de motor para una Jeep Grand Cherokee 2018. Consulté en la concesionaria y no había stock, pero Reisen Go pudo importármelos sin problema. Muy agradecido.' },
  { nombre: 'Moisés Huamantica', texto: 'Excelente atención. Me ayudaron a encontrar los repuestos compatibles para mi vehículo y resolvieron todas mis dudas.' },
  { nombre: 'Franco Zegarra', texto: 'Al principio dudaba de la seriedad, pero me sorprendieron: recibí mis productos en solo 13 días. ¡Totalmente recomendado!' }, 
];





function Nosotros() {

            useEffect(()   => {
        AOS.init({
          duration: 1000, // duración de la animación en ms
          once: true      // se ejecuta solo una vez
        });
      }, []);

 
   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Aquí defines 2 por slide
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
 
  return (
    <section className='Nosotros'>
      <div className='contenedor-Nosotros'>
        <h1>Nosotros</h1>
        <hr/>
        <div className='section-mv' data-aos="zoom-out-up">
           <h3>¿Quienes Somos?</h3>
          <div className='mv-top'>
           
            <p>Reisen Go es una empresa peruana ubicada en Lima, Perú, especializada en la importación de repuestos vehiculares (autos, motos, camiones), productos electrónicos, maquinaria y una amplia variedad de artículos provenientes de EE.UU. y China.
                Contamos con todos los permisos y certificaciones necesarios para realizar importaciones seguras, confiables y adaptadas a las necesidades de nuestros clientes.
                Disponemos de un almacén propio en Lima, donde recibimos los pedidos antes de ser enviados directamente a su domicilio, taller u oficina.
                Nos comprometemos a brindarle un servicio de importación personalizado, rápido y eficiente. Además, ofrecemos la modalidad Door to Door, lo que significa que entregamos su pedido directamente en sus manos, sin complicaciones.<br/>
                Con Reisen Go, Importa seguro.
            </p>
            <img src={logo} className="img-nosotros" alt="Nuestro equipo" />
          </div>
          <div className='mv-bottom'>
            <div className="nosotros-card">
                  <div className="nosotros-card-body">
                  <h5 className="nosotros-card-title">Misión</h5>
                  <p className="nosotros-card-text">Somos una empresa importadora de repuestos vehiculares, especializada en ofrecer productos de alta calidad para una amplia variedad de marcas y modelos, desde autos comunes hasta vehículos de alta gama. Traemos repuestos desde EE. UU. y Europa, con precios competitivos, atención personalizada y entregas confiables.</p>
                  </div>
            </div>
            <div className="nosotros-card">
                  <div className="nosotros-card-body">
                  <h5 className="nosotros-card-title">Visión</h5>
                  <p className="nosotros-card-text">Ser la empresa líder en Perú en la importación de repuestos vehiculares, reconocida por la variedad de productos, la excelencia en el servicio y la confiabilidad en cada entrega. Aspiramos a consolidarnos como el proveedor más confiable, superando expectativas y fortaleciendo el sector automotriz.</p>
                  </div>
            </div>
          </div>
        </div>

         <h1>Valores</h1>
         <hr/>
      
            <div className='contenedor-valores'data-aos="flip-down">
              <div className='section-valores'>
                
                <div className="nosotros-card-valores">
                  <img src={confianza} className="valores-card-img" alt="imagen de confianza" />
                  <div className="valores-card-body">
                    <h3>Confianza</h3>
                    <p className="valores-card-text">
                      Nos esforzamos por generar relaciones duraderas basadas en la transparencia, la honestidad y la seguridad en cada operación de importación.
                    </p>
                  </div>
                </div>

                <div className="nosotros-card-valores">
                  <img src={personalizacion} className="valores-card-img" alt="imagen de personalización" />
                  <div className="valores-card-body">
                    <h3>Personalización</h3>
                    <p className="valores-card-text">
                      Cada cliente es único. Brindamos un servicio cercano, ajustado a sus necesidades específicas, acompañándolo desde la cotización hasta la entrega.
                    </p>
                  </div>
                </div>

                <div className="nosotros-card-valores">
                  <img src={transparencia} className="valores-card-img" alt="imagen de transparencia" />
                  <div className="valores-card-body">
                    <h3>Transparencia</h3>
                    <p className="valores-card-text">
                      Comunicamos con claridad cada paso del proceso, para que el cliente siempre sepa dónde está su pedido y qué esperar.
                    </p>
                  </div>
                </div>

              </div>
            </div>


         <h1>Reseñas</h1>
        <hr/> 
       
        <div className='contenedor-reseña'data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
          <div className="carrusel-container">
            <Slider {...settings}>
              {comentarios.map((comentario, index) => (
                <div key={index} className="comentario-card">
                  <p className="comentario-text">“{comentario.texto}”</p>
                  <p className="comentario-nombre"> {comentario.nombre}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>



      </div>
    </section>
  );
}

export default Nosotros;
