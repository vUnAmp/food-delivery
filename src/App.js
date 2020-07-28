import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
        <Switch>
          <Route
            path="/login"
            //  render={()=> <Header /> } // Cho phép render function trực tiếp
            component={login}
          />
          <Route path="/"  component={home} />
          <Route path="/signup" component={signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
