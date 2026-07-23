import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Explore the world with our handpicked travel experiences.</p>

      <div className="trip-card">
        <TripData
          img={Trip1}
          heading="Trip in Indonesia"
          text="A scenic trip through the islands with tranquil beaches and amazing food."
        />
        <TripData
          img={Trip2}
          heading="Trip in Malaysia"
          text="Discover vibrant city life, rainfall forests and breathtaking coastlines."
        />
        <TripData
          img={Trip3}
          heading="Trip in France"
          text="Enjoy timeless architecture, fine dining and charming streets along the route."
        />
      </div>
    </div>
  );
}

export default Trip;
