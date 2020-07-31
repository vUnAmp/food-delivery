import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import Navbar from "./components/Navbar";

import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import configtheme from "./configtheme";
const theme = createMuiTheme({ configtheme });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/signup" component={signup} />
            <Route path="/login" component={login} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
