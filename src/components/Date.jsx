import React from 'react'

const Date = ({ date }) => (
  <div className="text-black uppercase mx-auto text-center p-5 flex flex-col items-center">
    <h3 className="text-bold py-1 text-sm font-black font-bold">{date.date}</h3>
    <div className="py-1 text-lg">
      {date.acts.map((act, idx) => (
        <>
          <span>{act}</span>
          { 
            idx < (date.acts.length - 1) && (
              <span> - </span>
          )}
        </>
      ))}
    </div>
    <a className="border-4 p-2 m-2 border-black text-md font-bold w-1/2 hover:bg-blue-900 hover:bg-opacity-30 hover:duration-500"href={date.link}>TICKETS</a>
  </div>
);

export default Date;