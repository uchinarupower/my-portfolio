import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import events from './Event.json';

function Event() {
  return (
    <Container className="mt-4">
      <h1>Event Timeline</h1>
      <Row>
        {events.map((event, index) => (
          <Col lg={12} key={index} className="mt-4">
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>{event.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {event.date}
                </Card.Subtitle>
                <Card.Text>{event.location}</Card.Text>
                <Card.Text>{event.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Event;
