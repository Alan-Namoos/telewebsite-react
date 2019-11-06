import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav nav-pills  justify-content-center mt-3 mb-5">
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/ed-admission-log" className="nav-link">
        ED Admission Log
      </NavLink>
      <NavLink to="/box-grid" className="nav-link">
        Box Grid
      </NavLink>
    </nav>
  );
};

export default Nav;
