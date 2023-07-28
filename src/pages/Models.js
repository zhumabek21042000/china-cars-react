import React, { Suspense, useEffect } from "react";
import Navbar from "../components/main/Navbar";
import Footer from "../components/main/Footer";
import PageHeader from "../components/main/PageHeader";
import Loader from "../components/main/Loader";
import { useLocation } from "react-router-dom";

// Lazy load the ModelList component
const LazyModelList = React.lazy(() =>
  import("../components/trucks/ModelList")
);

const Models = () => {
  const location = useLocation();
  const breadcrumbLinks = [
    { text: "Partner Center", url: "/" },
    { text: "Модели", url: "/models" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar active_tab="others" />
      <Suspense fallback={<Loader />}>
        <PageHeader title="Все модели" breadcrumbLinks={breadcrumbLinks} />
        <LazyModelList />
      </Suspense>
      <Footer />
    </>
  );
};

export default Models;
