import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Inicio from './components/pages/Inicio';
import Contactanos from './components/pages/Contenedor_Contactanos';
import Nav from './components/pages/Nav';
import Footer from './components/pages/Footer';
import Nosotros from './components/pages/Nosotros';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contactanos />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
