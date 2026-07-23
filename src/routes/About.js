import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-middle"
        heroImg={AboutImg}
        title="About"
        text="We create meaningful travel experiences."
        buttonText=""
      />
      <AboutUs img={AboutImg} />
      <Footer />
    </>
  );
}

export default About;
