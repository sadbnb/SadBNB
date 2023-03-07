import React from 'react'
import { useState } from 'react'
import CalendarPopup from 'react-calendar'
import './calendar.scss'

function Calendar(props) {

    const [date, setDate] = useState(new Date())

    const handleOnChange = date => { setDate(date) }

  return (props.trigger) ? (
    <div>
        <CalendarPopup onChange={handleOnChange} value={date} />
        {props.children}
        <button className='calendar-close' onClick={() => props.setTrigger(false)}>X</button>
    </div>
  ) : ""
}

export default Calendar
