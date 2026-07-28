import { useState } from "react";
import { MenuItems } from "./MenuItems";
import Link from "next/link";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <Link className="navbar-logo" href="/">
        Trippy<span>Tour</span>
      </Link>

      <div className="menu-icons" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
