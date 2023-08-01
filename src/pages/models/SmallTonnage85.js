import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHino700 from "../../components/models/ModelHino700";
import ModelHinoXzu85 from "../../components/models/ModelHinoXzu85";

const SmallTonnage85 = () => {
  return (
    <>
      <Navbar active_tab="others" />
      <ModelHinoXzu85></ModelHinoXzu85>
      <Footer />
    </>
  );
};

export default SmallTonnage85;
