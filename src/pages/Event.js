import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Event = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className="text-center">
          <p>2020</p>
        </Col>
        <Col md={9}>
          <h2>Event Title</h2>
          <p>Event description goes here...</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 9, offset: 3 }}>
          <h2>Another Event Title</h2>
          <p>Another event description goes here...</p>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="text-center">
          <p>2019</p>
        </Col>
        <Col md={9}>
          <h2>Event Title</h2>
          <p>Event description goes here...</p>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 9, offset: 3 }}>
          <h2>Another Event Title</h2>
          <p>Another event description goes here...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Event;
