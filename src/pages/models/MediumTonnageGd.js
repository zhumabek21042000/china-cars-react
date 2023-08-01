import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHinoGd from "../../components/models/ModelHinoGd";
import PageHeader from "../../components/main/PageHeader";

const MediumTonnageGd = () => {
  const location = useLocation();
  const breadcrumbLinks = [
    { text: "Partner Center", url: "/" },
    { text: "Модели", url: "/models" },
    { text: "ПОЛНАЯ МАССА 12,0 Т | ШАССИ GD", url: "" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <Navbar active_tab="others" />
      <PageHeader title="Все модели" breadcrumbLinks={breadcrumbLinks} />
      <ModelHinoGd></ModelHinoGd>
      <Footer />
    </>
  );
};

export default MediumTonnageGd;
