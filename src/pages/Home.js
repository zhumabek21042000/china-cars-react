import React, { Suspense, useEffect } from "react";
import About from "../components/About";
import Navbar from "../components/main/Navbar";
import Slider from "../components/Slider";
import Facts from "../components/Facts";
import Accomodations from "../components/Accomodations";
import CallForm from "../components/CallForm";
import Platforms from "../components/Platforms";
import Footer from "../components/main/Footer";
import Loader from "../components/main/Loader";
import { useLocation } from "react-router-dom";

const LazyModelList = React.lazy(() =>
  import("../components/Services")
);
const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <Suspense fallback={<Loader />}>
      <Navbar active_tab="main"></Navbar>
      <Slider></Slider>
      <LazyModelList />
      <About></About>
      <Facts></Facts>
      <Accomodations></Accomodations>
      <CallForm></CallForm>
      <Platforms></Platforms>
      <Footer></Footer>
    </Suspense>
    </>
  );
};
export default Home;
