import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-middle"
        heroImg={AboutImg}
        title="Contact Us"
        text="We’d love to hear from you."
        buttonText=""
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
