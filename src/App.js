import React from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import about from "./pages/about";
import contact from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
 
        <Switch>
          <Route
            path="/about"
            //  render={()=> <Header /> } // Cho phép render function trực tiếp
            component={about}
          />
          <Route path="/contact" component={contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
