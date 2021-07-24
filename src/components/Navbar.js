import React from "react";
import "./Navbar.css";
import logo from "./../images/spasi.png";
const Navbar = () => {
  return (
    <header>
      <div className="nav-left">
        <img className="nav-logo" src={logo} alt="" />
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">Pricing</a>
            </li>
            <li>
              <a href="/#">Gallery</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <ul className="nav-ul-right">
          <li>
            <a href="/#">Sign In</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
