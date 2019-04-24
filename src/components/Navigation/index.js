import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/jss_logo.png";

const Navigation = props => (
  <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom">
    <h5 className="my-0 mr-md-auto font-weight-normal">
      <NavLink to="/" className="text-dark">
        <img src={logo} height={50} alt="Sitecore" />
      </NavLink>
    </h5>
    <nav className="my-2 my-md-0 mr-md-3">
      <NavLink to="/" className="p-2 text-dark">
        Home
      </NavLink>
      <NavLink to="/about" className="p-2 text-dark">
        About
      </NavLink>
      <a
        className="p-2 text-dark"
        href="https://jss.sitecore.net"
        target="_blank"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
    </nav>
  </div>
);

export default Navigation;
