import Navbar from "../components/main/Navbar";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Facts from "../components/Facts";
import Accomodations from "../components/Accomodations";
import CallForm from "../components/CallForm";
import Platforms from "../components/Platforms";
import Footer from "../components/main/Footer";

const About = () => {
  return (
    <>
      <Navbar active_tab="about"></Navbar>
      <Slider></Slider>
      <Services></Services>
      <Facts></Facts>
      <Accomodations></Accomodations>
      <CallForm></CallForm>
      <Platforms></Platforms>
      <Footer></Footer>
    </>
  );
};
export default About;
