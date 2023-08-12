import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const handleIsActive = ({ isActive }) => {
  return {
    fontWeight: isActive ? "bold" : "",
    color: isActive ? "white" : "",
  };
};
function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav-container">
        <NavLink to="/" className="navlink" style={handleIsActive}>
          Dashboard
        </NavLink>
        <NavLink to="/departments" className="navlink" style={handleIsActive}>
          Departments
        </NavLink>
        <NavLink to="/products" className="navlink" style={handleIsActive}>
          Products
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
