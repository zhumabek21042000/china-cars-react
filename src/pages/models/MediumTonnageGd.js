import React from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHinoGd from "../../components/models/ModelHinoGd";

const MediumTonnageGd = () => {
  return (
    <>
      <Navbar active_tab="others" />
      <ModelHinoGd></ModelHinoGd>
      <Footer />
    </>
  );
};

export default MediumTonnageGd;
