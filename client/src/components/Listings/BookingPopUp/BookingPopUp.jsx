import React, { useState } from 'react'
import './BookingPopUp.scss'
import Calendar from 'react-calendar'

function BookingPopUp(props) {

    const [date, setDate] = useState(new Date())

    const handleOnChange = date => { setDate(date) }

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='pics-container'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                <img className='Popup-pic1' src='https://luxuryrentalsmanhattan.com/sites/default/files/uploads/penthousewindowslivingroom.jpg' alt='NYC'/>
                <button className='book-btn'>Book</button>
                    <Calendar onChange={handleOnChange} value={date} />
            </div>
            { props.children}
        </div>
    </div>
  ) : ""
}

export default BookingPopUp
