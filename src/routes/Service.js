import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-middle"
        heroImg={AboutImg}
        title="Our Services"
        text="Explore curated packages built for comfort, adventure, and memorable escapes."
        buttonText=""
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
