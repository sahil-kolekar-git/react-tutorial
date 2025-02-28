import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <div className="products">
        <ul>
          <li>
            <NavLink to={"new"}>New</NavLink>
          </li>
          <li>
            <NavLink to={"featured"}>Featured</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </>
  );
};

export default Products;
