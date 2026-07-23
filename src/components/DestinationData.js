import { Component } from "react";
import "./DestinationStyles.css";

class DestinationData extends Component {
  render() {
    return (
      <div className={`destination-card ${this.props.className}`}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>

        <div className="image-group">
          <img src={this.props.img1} alt="Destination" />
          <img src={this.props.img2} alt="Destination" />
        </div>
      </div>
    );
  }
}

export default DestinationData;
