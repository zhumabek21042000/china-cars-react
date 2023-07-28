import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";
import "./assets/stylesheet/bootstrap.min.css";
import "./assets/stylesheet/style.css";
import "./assets/javascript/main";

import Models from "./pages/Models";
import Platform from "./pages/Platform";
import PlatformDetails from "./pages/PlatformDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/models" element={<Models />} />
        <Route path="/platforms" element={<Platform />} />
        <Route path="/platforms/:name" element={<PlatformDetails />} />
        <Route path="*" element={<NotFound />} />
        {/* This route will be matched if no other route matches */}
      </Routes>
    </Router>
  );
}

export default App;
