import React from 'react';
import { motion } from 'framer-motion';
import './EventTimeline.css';
import events from './events.json';

const listItemVariants = {
  visible: i => ({
    opacity: 1,
    transition: {
      delay: i * 0.1, // 0.1秒ごとに次のアイテムが表示される
    },
  }),
  hidden: { opacity: 0 },
};

const Event = ({ event, i }) => {
  return (
    <motion.div
      className="event"
      initial="hidden"
      whileHover="visible"
      layout
    >
      <div className="event-info">
        <h3>{event.name}</h3>
        <p>{event.date}</p>
      </div>
      <motion.div className="event-details" variants={listItemVariants} custom={1}>
        <p>{event.location}</p>
      </motion.div>
      <motion.div className="event-details" variants={listItemVariants} custom={2}>
        <p>{event.description}</p>
      </motion.div>
      <motion.div className="event-details" variants={listItemVariants} custom={3}>
        <a href={event.link} target="_blank" rel="noopener noreferrer">{event.link_name}</a>
      </motion.div>
      {event.photo && (
        <motion.img
          src={event.photo}
          alt={event.name}
          className="event-photo"
          variants={listItemVariants}
          custom={4}
        />
      )}
    </motion.div>
  );
};

const EventTimeline =()=> {
  return (
    <div className="event-timeline">
      <h2>EventTimeline</h2>
      {events.map((event, index) => (
        <Event key={event.id} event={event} i={index} />
      ))}
    </div>
  );
};

export default EventTimeline;
