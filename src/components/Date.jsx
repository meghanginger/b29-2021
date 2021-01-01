import React from 'react'

const Date = ({ date }) => (
  <div className="text-gray-200">
    <h3>{date.date}</h3>
    {date.acts.map(act => (
      <span>{act}</span>
    ))}
    <a href={date.link}>TICKETS</a>
  </div>
);

export default Date;