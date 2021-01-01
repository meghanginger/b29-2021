import React from 'react'
import dates from "../data/dates.json"
import Date from "../components/Date"

const DatesList = () => (
  <div>
    {
      dates.map(date => (
        <Date date={date} />
      ))
    }
  </div>
)

export default DatesList;