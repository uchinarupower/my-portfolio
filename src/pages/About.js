import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="container mt-5">
      <h1>About</h1>
      <div className="row mt-4">
        <div className="col-lg-3">
          <FontAwesomeIcon icon={faUser} size="8x" />
        </div>
        <div className="col-lg-9">
          <h2>Name</h2>
          <p>John Smith</p>
          <h2>Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique, lorem ac volutpat bibendum, ex nisi imperdiet tellus,
            eget molestie ex enim at eros. Aenean convallis, nisi a pulvinar
            semper, quam justo iaculis erat, vel suscipit felis est vitae
            augue.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
