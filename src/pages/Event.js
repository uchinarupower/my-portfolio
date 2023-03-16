// Event.js

import React, { useState } from 'react';
import './Event.css';

const events = [
  {
    date: 'January 1, 2023',
    title: 'New Year\'s Day',
    description: 'The first day of the year in the Gregorian calendar.',
    details: 'New Year\'s Day is a national holiday celebrated on January 1st. It marks the first day of the year in the Gregorian calendar, and is a time for new beginnings and resolutions.'
  },
  {
    date: 'March 11, 2023',
    title: 'Example Event',
    description: 'This is an example event for the timeline.',
    details: 'This is a sample event for the timeline. It has no real significance, but serves as an example of how to structure the data for the timeline.'
  },
  {
    date: 'June 21, 2023',
    title: 'Summer Solstice',
    description: 'The longest day of the year in the Northern Hemisphere.',
    details: 'The summer solstice is the longest day of the year in the Northern Hemisphere. It occurs around June 21st, and marks the beginning of summer.'
  },
  {
    date: 'October 31, 2023',
    title: 'Halloween',
    description: 'A holiday celebrated on October 31st in many countries around the world.',
    details: 'Halloween is a holiday celebrated on October 31st in many countries around the world. It is often associated with costumes, trick-or-treating, and spooky decorations.'
  }
];

const Event = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  }

  const handleClose = () => {
    setSelectedEvent(null);
  }

  return (
    <div className="container">
      <h1>Event Timeline</h1>
      <div className="timeline">
        {events.map((event) => (
          <div key={event.date} className="event" onClick={() => handleEventClick(event)}>
            <div className="date">{event.date}</div>
            <div className="title">{event.title}</div>
          </div>
        ))}
      </div>
      {selectedEvent && (
        <div className="modal" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <p>{selectedEvent.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
