import React from "react";

import { AppBar, Toolbar, Button } from "@material-ui/core/";

import { Link } from "react-router-dom";

import "./Navbar.scss"

export default function Navbar() {
  return (
    <AppBar position="static" classes={{ label : ""}} >
      <Toolbar className="nav-link">
        <Button component={Link} to="/">
          Home{" "}
        </Button>
        <Button component={Link} to="/login">
          Login{" "}
        </Button>
        <Button select component={Link} to="/signup">
          Sign Up{" "}
        </Button>
        {/* <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link> */}
      </Toolbar>
    </AppBar>
  );
}
