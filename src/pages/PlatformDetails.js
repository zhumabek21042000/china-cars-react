import React, { useEffect } from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import Loader from "../components/main/Loader";
import PageHeader from "../components/main/PageHeader";
import platformData from "../data/platformData";
import PlatformInfo from "../components/platforms/PlatformInfo";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PlatformDetails = () => {
  const params = useParams();
  const location = useLocation();
  const platformName = params.name;
  const platform = platformData.find(
    (platform) => platform.name === platformName
  );
  const breadcrumbLinks = [
    { text: "Partner Center", url: "/" },
    { text: "Надстройки", url: "/platforms" },
    { text: platform.title, url: "" },
  ];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar active_tab="others"></Navbar>
      <PageHeader title="Платформа" breadcrumbLinks={breadcrumbLinks} />

      <PlatformInfo excludePlatform={platformName} />
      <Footer />
    </>
  );
};

export default PlatformDetails;
