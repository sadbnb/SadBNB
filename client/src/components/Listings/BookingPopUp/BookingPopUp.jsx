import { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import './BookingPopUp.scss'

function BookingPopUp(props) {

    const [calendarButton, setCalendarButton] = useState(false)

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='pics-container'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
                <img className='Popup-pic1' src='https://luxuryrentalsmanhattan.com/sites/default/files/uploads/penthousewindowslivingroom.jpg' alt='NYC'/>
                <button className='book-btn' onClick={() => setCalendarButton(true)}>Book</button>
            </div>
            { props.children }
        </div>
        <Calendar trigger={calendarButton} setTrigger={setCalendarButton} />
    </div>
  ) : ""
}

export default BookingPopUp
