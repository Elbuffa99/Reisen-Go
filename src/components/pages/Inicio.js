import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Carru1 from '../img/Carrusel1.png';
import Carru2 from '../img/Carrusel2.png';

import Nav from './Nav';
import Footer from './Footer';
import Logos from './LogoCarouselBootstrap';
import ContService from './Conteiner_Servicios';
import Noso from './Nosotros';
import Contac from './Contenedor_Contactanos.js';

import '../Style/Inicio.css'    


function Inicio() {
  return (  
    <div className='Cont-total' id='Inicio'>  
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <Nav/> 
        <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Carru1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5></h5>
                    <p></p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Carru2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5></h5>
                    <p></p>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Carru1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h5></h5>
                    <p></p>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
      
        </button>
        </div>
        <Logos/>        
        <ContService/>
        <Noso/>
        <Contac/>
        <Footer/>

    </div>    
  );
}

export default Inicio;
