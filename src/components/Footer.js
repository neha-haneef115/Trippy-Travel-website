import { Link } from "react-router-dom";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h3>Trippy Tour</h3>
        <p>Choose your favourite destination.</p>
      </div>

      <div className="footer-links">
        <h3>Project</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="footer-contact">
        <h3>Contact</h3>
        <p>123 Market Street, Suite 100</p>
        <p>+1 234 567 890</p>
        <p>hello@trippy.com</p>
      </div>
    </div>
  );
};

export default Footer;
