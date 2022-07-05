import React from "react";
import "./Styles/Navbar.css";
import ealers from "./Images/Group 3.png";
import smoke from "./Images/Group 2.png";
import brands from "./Images/Group 5.png";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-icons">
      <img src={ealers} alt="" />
      <img src={smoke} alt="" />
      <img src={brands} alt="" />
      </div>
    </div>
  );
};
