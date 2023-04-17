import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Event from "./pages/Event";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/my-portfolio">
          <About />
        </Route>
        <Route path="/event">
          <Event />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
