import React, { useState, useEffect } from 'react';
import './EventTimeline.css';

function EventTimeline() {
  const [events, setEvents] = useState([
    { year: 2023, description: 'Event 1' },
    { year: 2022, description: 'Event 2' }
  ]);

  // Normally you would fetch this data from an API or file
  useEffect(() => {
    // Here we're just using the static data above
  }, []);

  return (
    <section className="event-timeline">
      <h2>Event Timeline</h2>
      {events.map((event, index) => (
        <div key={index} className="event">
          <div className="event-year">{event.year}</div>
          <div className="event-description">{event.description}</div>
        </div>
      ))}
    </section>
  );
}

export default EventTimeline;
