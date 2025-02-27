import React from "react";
import { NavLink } from "react-router-dom";
//! style property will also accepts function which returns one object and also has an object in parameter which returns one object
const Navbar = () => {
  let handleStyle = ({ isActive }) => {
    return {
      color: isActive ? "purple" : "white",
      textDecoration: isActive ? "underline" : "none",
    };
  };
  return (
    <>
      <div className="main">
        <ul>
          <li>
            <NavLink to={"/"} style={handleStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"} style={handleStyle}>
              Product
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} style={handleStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"contact"} style={handleStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
