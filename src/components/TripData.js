import "./TripStyles.css";

function TripData(props) {
  return (
    <div className="t-card">
      <img src={props.img} alt="Trip" />
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
