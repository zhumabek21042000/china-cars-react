import About from "../components/About";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Facts from "../components/Facts";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <Services></Services>
      <About></About>
      <Facts></Facts>
    </>
  );
};
export default Home;
