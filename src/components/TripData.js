const getSrc = (image) =>
  image && typeof image === "object" ? image.src || image.default || "" : image;

function TripData(props) {
  return (
    <div className="t-card">
      <img src={getSrc(props.img)} alt="Trip" />
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default TripData;
