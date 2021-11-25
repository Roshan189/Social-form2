import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav id="navbar">
        <h1>
          <span> Social</span> Marketplace
        </h1>
        <ul>
          <li>
            <NavLink className="nav-links" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/signup">
              Sign Up
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/signin">
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-links" to="/about">
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
