import React, { useState } from "react";

import "../Styles/Navbar.css";
import { FaBars, FaTimes, FaAmazon } from "react-icons/fa";
const Navbar = () => {
  const [Icons, setIcons] = useState(false);
  return (
    <nav>
      <div className="logo__container">
        <div>
          <FaAmazon className="logo__amazon" />
        </div>
        <div className="navbar__icon" onClick={() => setIcons(!Icons)}>
          {!Icons ? (
            <FaBars className="navbar__bar" />
          ) : (
            <FaTimes className="navbar__time" />
          )}
        </div>
      </div>
      <div>
        <ul
          onClick={() => setIcons(!Icons)}
          className={!Icons ? "menu active" : "menu"}
        >
          <li>Home</li>
          <li>Contact us</li>
          <li>About Us</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
