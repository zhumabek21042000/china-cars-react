import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ModelHino700 from "../../components/models/ModelHino700";
import PageHeader from "../../components/main/PageHeader";
import CallForm from "../../components/CallForm";

const BigTonnage = () => {
  const location = useLocation();
  const breadcrumbLinks = [
    { text: "Partner Center", url: "/" },
    { text: "Модели", url: "/models" },
    { text: "ПОЛНАЯ МАССА 30,7 Т | ШАССИ FS", url: "" },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar active_tab="others" />
      <PageHeader title="Все модели" breadcrumbLinks={breadcrumbLinks} />
      <ModelHino700></ModelHino700>
      <CallForm></CallForm>
      <Footer />
    </>
  );
};

export default BigTonnage;
