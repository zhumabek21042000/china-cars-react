import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHino700 from "../../components/models/ModelHino700";

const BigTonnage = () => {
  return (
    <>
      <Navbar active_tab="others" />
      <ModelHino700></ModelHino700>
      <Footer />
    </>
  );
};

export default BigTonnage;
