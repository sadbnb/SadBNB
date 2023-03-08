import React from 'react'
import { useState } from 'react'
import './BookingCard.scss'
import Calendar from '../Calendar/Calendar'


const BookingCard = ({ interior, setTrigger, description}) => {

    console.log(interior.image)

    const [calendarButton, setCalendarButton] = useState(false)
  return (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='pics-container'>
            <button className='close-btn' onClick={() => setTrigger(false)}>X</button>
            <section class="gallery">
                <div class="gallery__item">
                    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
                    <img class="gallery__img" src={interior.image} alt=""/>
                  
                </div>
                </section>

                <h3 className='apt-details'>{description}</h3>
                <button className='book-btn' onClick={() => setCalendarButton(true)}>BOOK</button>
            
            </div>
            {/* { props.children } */}
        </div>
        <Calendar trigger={calendarButton} setTrigger={setCalendarButton} />
    </div>
  )
}

export default BookingCard
