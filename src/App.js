import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./pages/About";
// import Event from "./pages/Event";
import Header from "./pages/Header";
import Education from "./pages/Education";
import Affiliations from "./pages/Affiliations";
// import Navigation from "./pages/Navigation";
import EventTimeline from "./pages/EventTimeline";
import Contact from "./pages/Contact";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Affiliations />
      <EventTimeline />
      <Contact />
    </div>
  );
}

export default App;