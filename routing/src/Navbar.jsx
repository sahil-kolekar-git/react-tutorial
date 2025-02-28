import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>Products</NavLink>
          </li>
          <li>
            <NavLink to={"/about-us"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={"/users"}>Users</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
