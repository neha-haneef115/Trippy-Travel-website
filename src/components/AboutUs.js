import "./AboutUsStyles.css";

function AboutUs(props) {
  return (
    <div className="about-container">
      <img src={props.img} alt="About" />
      <div className="about-text">
        <h1>Our Story</h1>
        <p>
          Trippy Tour was created for travelers who want more than just a trip. We design journeys around culture, comfort and discovery.
        </p>
        <p>
          From mountain escapes to city adventures, our team makes sure every experience is carefully planned and memorable.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
