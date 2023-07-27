import About from "../components/About";
import Navbar from "../components/main/Navbar";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Facts from "../components/Facts";
import Accomodations from "../components/Accomodations";
import CallForm from "../components/CallForm";
import Platforms from "../components/Platforms";
import Footer from "../components/main/Footer";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <Services></Services>
      <About></About>
      <Facts></Facts>
      <Accomodations></Accomodations>
      <CallForm></CallForm>
      <Platforms></Platforms>
      <Footer></Footer>
    </>
  );
};
export default Home;
