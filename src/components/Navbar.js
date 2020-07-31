import React from "react";

import { AppBar, Toolbar, Button } from "@material-ui/core/";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import "./Navbar.scss";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
  link: {
    color: "#ffffff",
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Toolbar className="nav-link">
        <Button component={Link} to="/" className={classes.link}>
          Home{" "}
        </Button>
        <Button
          className={classes.link}
          //  className={classes.root}
          component={Link}
          to="/login"
        >
          Login{" "}
        </Button>
        <Button className={classes.link} component={Link} to="/signup">
          Sign Up{" "}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
