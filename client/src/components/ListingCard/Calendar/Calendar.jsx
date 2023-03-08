import React from 'react'
import { useState } from 'react'
import CalendarPopup from 'react-calendar'
import './calendar.scss'

function Calendar(props) {

    const [date, setDate] = useState(new Date())

    const handleOnChange = date => { setDate(date) }

  return (props.trigger) ? (
    <div className='calendar-container'>
      <button className='calendar-close' onClick={() => props.setTrigger(false)}>X</button>
        <CalendarPopup onChange={handleOnChange} value={date} />
        {props.children}
    </div>
  ) : ""
}

export default Calendar