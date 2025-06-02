import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



import '../Style/Nosotros.css';



import nosotros from '../img/img-nosotros.png'

const comentarios = [
  { nombre: 'Juan Perez', texto: 'Excelente servicio, muy rápido y confiable.' },
  { nombre: 'María Magdalena', texto: 'Los repuestos llegaron en perfectas condiciones.' },
  { nombre: 'Carlos Carlin', texto: 'Atención personalizada, muy recomendable.' },
  { nombre: 'Lucía De La Cruz', texto: 'Todo muy claro, llegó a tiempo. Muy profesional.' },
  { nombre: 'Pedro Morales', texto: 'Buena asesoría, me ayudaron con todo.' },
  { nombre: 'Juan Perez', texto: 'Excelente servicio, muy rápido y confiable.' },
  { nombre: 'María Magdalena', texto: 'Los repuestos llegaron en perfectas condiciones.' },
  { nombre: 'Carlos Carlin', texto: 'Atención personalizada, muy recomendable.' },
  { nombre: 'Lucía De La Cruz', texto: 'Todo muy claro, llegó a tiempo. Muy profesional.' },
  { nombre: 'Pedro Morales', texto: 'Buena asesoría, me ayudaron con todo.' },
];





function Nosotros() {
 
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
        <div className='section-mv'>
           <h3>¿Quienes Somos?</h3>
          <div className='mv-top'>
           
            <p>Reisen Go es una empresa peruana ubicada en Lima, Perú, especializada en la importación de repuestos vehiculares (autos, motos, camiones), productos electrónicos, maquinaria y una amplia variedad de artículos provenientes de EE.UU. y China.
                Contamos con todos los permisos y certificaciones necesarios para realizar importaciones seguras, confiables y adaptadas a las necesidades de nuestros clientes.
                Disponemos de un almacén propio en Lima, donde recibimos los pedidos antes de ser enviados directamente a su domicilio, taller u oficina.
                Nos comprometemos a brindarle un servicio de importación personalizado, rápido y eficiente. Además, ofrecemos la modalidad Door to Door, lo que significa que entregamos su pedido directamente en sus manos, sin complicaciones.<br/>
                Con Reisen Go, Importa seguro.
            </p>
            <img src={nosotros} className="img-nosotros" alt="Nuestro equipo" />
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
      
        <div className='contenedor-valores'>

          <div className='section-valores'>
            <div className="nosotros-card-valores">
              <img src={nosotros} className="valores-card-img" alt="..." />
              <div className='valores-2'>
              <div className="valores-card-body">
                <h3>Confianza</h3>
                <p className="valores-card-text">
                  Nos esforzamos por generar relaciones duraderas basadas en la transparencia, la honestidad y la seguridad en cada operación de importación.
                </p>
              </div>
              </div>
            </div>

            <div className="nosotros-card-valores">
              <img src={nosotros} className="valores-card-img" alt="..." />
              <div className="valores-card-body">
                <h3>Personalización</h3>
                <p className="valores-card-text">
                  Cada cliente es único. Brindamos un servicio cercano, ajustado a sus necesidades específicas, acompañándolo desde la cotización hasta la entrega.
                </p>
              </div>
            </div>

            <div className="nosotros-card-valores">
              
              <img src={nosotros} className="valores-card-img" alt="..." />
              <div className='valores-3'>
              <div className="valores-card-body">
                <h3>Transparencia</h3>
                <p className="valores-card-text">
                  Comunicamos con claridad cada paso del proceso, para que el cliente siempre sepa dónde está su pedido y qué esperar.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>

         <h1>Reseñas</h1>
        <hr/> 
       
        <div className='contenedor-reseña'>
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
