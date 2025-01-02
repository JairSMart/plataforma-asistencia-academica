import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Trámites from './components/Trámites';
import FAQs from './components/FAQs';
import Contacto from './components/Contacto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/trámites" element={<Trámites />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
