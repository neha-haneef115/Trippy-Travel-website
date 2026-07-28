import Link from "next/link";

const getSrc = (image) =>
  image && typeof image === "object" ? image.src || image.default || "" : image;

function Hero(props) {
  return (
    <div className={props.cName}>
      <img src={getSrc(props.heroImg)} alt="Hero" />
      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        {props.buttonText && (
          <Link className={`hero-btn ${props.btnClass}`} href={props.url}>
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
