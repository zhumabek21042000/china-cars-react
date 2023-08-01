import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHino700 from "../../components/models/ModelHino700";
import ModelHinoXzu55 from "../../components/models/ModelHinoXzu55";

const BigTonnage = () => {
  return (
    <>
      <Navbar active_tab="others" />
      <ModelHinoXzu55></ModelHinoXzu55>
      <Footer />
    </>
  );
};

export default BigTonnage;
