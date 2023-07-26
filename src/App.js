import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import './assets/stylesheet/bootstrap.min.css'
import './assets/stylesheet/style.css'
import './assets/lib/animate/animate.min.css'
import './assets/lib/wow/wow.min.js'
import './assets/lib/easing/easing.min.js'
import './assets/lib/owlcarousel/owl.carousel.min.js'
import './assets/javascript/main'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* This route will be matched if no other route matches */}
      </Routes>
    </Router>
  );
}

export default App;
