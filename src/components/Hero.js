import { Link } from "react-router-dom";
import "./HeroStyles.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={props.heroImg} alt="Hero" />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {props.buttonText && (
          <Link className={`hero-btn ${props.btnClass}`} to={props.url}>
            {props.buttonText}
          </Link>
        )}
      </div>
    </div>
  );
}

Hero.defaultProps = {
  cName: "hero",
  title: "Your Journey Your Story",
  text: "Choose your favourite destination.",
  buttonText: "Travel Plan",
  url: "/service",
  btnClass: "show",
};

export default Hero;
