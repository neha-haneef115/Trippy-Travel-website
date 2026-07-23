import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <div className="destination-heading">
        <h1>Popular Destinations</h1>
        <p>
          Tours give you the opportunity to see a lot, within a time frame.
        </p>
      </div>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is a complex volcano located on the island of Luzon in the Philippines. It's known for its scenic lake and volcanic island, making it one of the must-visit destinations for adventure lovers."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
        className="first-des reverse"
        heading="Mt. Daguldul, Batangas"
        text="A broad, lush mountain known for its stunning views and hiking trails. The climb is rewarding, with panoramic landscapes and a peaceful environment that makes every step worthwhile."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
