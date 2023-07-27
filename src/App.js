import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import "./assets/stylesheet/bootstrap.min.css";
import "./assets/stylesheet/style.css";
import "./assets/javascript/main";
import PlatformKmu from "./components/platforms/PlatformKmu";
import PlatformTent from "./components/platforms/PlatformTent";
import PlatformMusorovoz from "./components/platforms/PlatformMusorovoz";
import PlatformSamosval from "./components/platforms/PlatformSamosval";
import PlatformIzoterm from "./components/platforms/PlatformIzoterm";
import PlatformPromtovar from "./components/platforms/PlatformPromtovar";
import PlatformRefrigerrator from "./components/platforms/PlatformRefrigerrator";
import PlatformCistern from "./components/platforms/PlatformCistern";
import PlatformEvacuator from "./components/platforms/PlatformEvacuator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/platforms/kmu" component={PlatformKmu} />
        <Route exact path="/platforms/tent" component={PlatformTent} />
        <Route
          exact
          path="/platforms/musorovoz"
          component={PlatformMusorovoz}
        />
        <Route exact path="/platforms/samosval" component={PlatformSamosval} />
        <Route
          exact
          path="/platforms/furgon-izotermicheskiy"
          component={PlatformIzoterm}
        />
        <Route
          exact
          path="/platforms/furgon-promtovar"
          component={PlatformPromtovar}
        />
        <Route
          exact
          path="/platforms/furgon-refrigerrator"
          component={PlatformRefrigerrator}
        />
        <Route exact path="/platforms/cistern" component={PlatformCistern} />
        <Route
          exact
          path="/platforms/evacuator"
          component={PlatformEvacuator}
        />
        <Route path="*" element={<NotFound />} />{" "}
        {/* This route will be matched if no other route matches */}
      </Routes>
    </Router>
  );
}

export default App;
