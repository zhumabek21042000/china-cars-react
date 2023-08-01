import React, { useEffect } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHino700 from "../../components/models/ModelHino700";
import ModelHinoGh from "../../components/models/ModelHinoGh";

const MediumTonnageGh = () => {
  return (
    <>
      <Navbar active_tab="others" />
      <ModelHinoGh></ModelHinoGh>
      <Footer />
    </>
  );
};

export default MediumTonnageGh;
