import React from "react";

import "./header.scss";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="header_wrap">
      <div className="header">
        <div className="header_brand">
          <Link to="/">
            {" "}
            <h1>WeLoveRice</h1>{" "}
          </Link>
        </div>
        <ul className="header_navlink">
          <li>
            {" "}
            <NavLink to="/about" activeClassName="nav_active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="nav_active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
