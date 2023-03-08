import { useState } from 'react'
import './BookingPopUp.scss'
import Calendar from '../Calendar/Calendar'
import BookingCard from '../BookingCard/BookingCard'

function BookingPopUp(props) {

    const { trigger, setTrigger, interiors } = props


 

  return (trigger) ? (
    <>
        {
            interiors.map((interior) => {
                console.log(interior.image)
                return <BookingCard key={interior.id} interior={interior} setTrigger={setTrigger} />
            })
        }
       
    </>
  ) : ""
}

export default BookingPopUp