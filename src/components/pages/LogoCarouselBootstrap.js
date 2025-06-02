import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../Style/LogoCarousel.css' 

import audi from '../img/audi.png';
import bmw from '../img/bmw.png';
import chevro from '../img/chavrolet.png';
import citroen from '../img/citroen.png';
import dodge from '../img/dodge.png';
import ford from '../img/ford.png';
import honda from '../img/Honda.png';
import jauar from '../img/jauar.png';
import jeep from '../img/jeep.png';
import lexus from '../img/lexus.png';
import lotus from '../img/lotus.png';
import mercedez from '../img/mercedez.png';
import mini from '../img/mini.png';
import mitsubishi from '../img/mitsubishi.png';
import nissan from '../img/nissan.png';
import porche from '../img/porche.png';
import renaut from '../img/renaut.png';
import subaru from '../img/subaru.png';
import toyota from '../img/toyota.png';
import volkswagen from '../img/volkswagen.png';
import volvo from '../img/volvo.png';




// 1. Lista de componentes de ícono (cada uno es un slide-item)
const allLogos = [
  audi, bmw, chevro, citroen, dodge,
  ford, honda, jauar, jeep,
  lexus, lotus, mercedez, mini, mitsubishi,
  nissan, porche, renaut, subaru, toyota, volkswagen,
  volvo
];

// 2. Función para partir array en grupos de N logos
function chunkArray(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;    
}

export default function Inicio() {
  const logosPerSlide = 3;                            // Logos por slide
  const logoGroups = chunkArray(allLogos, logosPerSlide);

  
  return (
    <div className='contenedor-logos'>
       
    <div className="container py-5">
      <div id="logoCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className='logos_title'>
          <div className='cont-titles'>
            <h2>Nuestas Marcas</h2>
          </div>
        </div>
        {/* 1) Indicadores */}
        <div className="carousel-indicators">
          {logoGroups.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#logoCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* 2) Slides */}
            <div className="carousel-inner">
              {logoGroups.map((group, idx) => (
                <div
                  key={idx}
                  className={`carousel-item ${idx === 0 ? 'active' : ''}`}
                >
                  <div
                    className="d-flex justify-content-around align-items-center flex-wrap"
                    style={{ minHeight: '150px' }}
                  >
                    {group.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt={`Logo ${i}`}
                        className=
                        {`logo-icon 
                          ${logo === volvo ? 'logo-volvo' : ''}
                          ${logo === renaut ? 'logo-renaut' : ''}
                          ${logo === toyota ? 'logo-toyota' : ''}
                          ${logo === chevro ? 'logo-chevro' : ''}
                          ${logo === ford ? 'logo-ford' : ''}
                          ${logo === jauar ? 'logo-jauar' : ''}
                          ${logo === lotus ? 'logo-lotus' : ''}
                        `}
                        style={{ maxHeight: '100px', objectFit: 'contain' }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>


        {/* 3) Controles Prev/Next */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#logoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#logoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
}
