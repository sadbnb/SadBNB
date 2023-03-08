import { useState } from 'react'
import './BookingPopUp.scss'
import Calendar from '../Calendar/Calendar'

function BookingPopUp(props) {

    const [calendarButton, setCalendarButton] = useState(false)

  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <div className='pics-container'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
            <section class="gallery">
                <div class="gallery__item">
                    <input type="radio" id="img-1" checked name="gallery" class="gallery__selector"/>
                    <img class="gallery__img" src="https://picsum.photos/id/1015/600/400.jpg" alt=""/>
                    <label for="img-1" class="gallery__thumb"><img src="https://picsum.photos/id/1015/150/100.jpg" alt=""/></label>
                </div>
                <div class="gallery__item">
                    <input type="radio" id="img-2" name="gallery" class="gallery__selector"/>
                    <img class="gallery__img" src="https://picsum.photos/id/1039/600/400.jpg" alt=""/>
                    <label for="img-2" class="gallery__thumb"><img src="https://picsum.photos/id/1039/150/100.jpg" alt=""/></label>
                </div>
                <div class="gallery__item">
                    <input type="radio" id="img-3" name="gallery" class="gallery__selector"/>
                    <img class="gallery__img" src="https://picsum.photos/id/1057/600/400.jpg" alt=""/>
                    <label for="img-3" class="gallery__thumb"><img src="https://picsum.photos/id/1057/150/100.jpg" alt=""/></label>
                </div>
                <div class="gallery__item">
                    <input type="radio" id="img-4" name="gallery" class="gallery__selector"/>
                    <img class="gallery__img" src="https://picsum.photos/id/106/600/400.jpg" alt=""/>
                    <label for="img-4" class="gallery__thumb"><img src="https://picsum.photos/id/106/150/100.jpg" alt=""/></label>
                </div>
                </section>

                <h3 className='apt-title'>Luxury 3 bedrooms apartment in the heart of Manhattan</h3>
                <button className='book-btn' onClick={() => setCalendarButton(true)}>BOOK</button>
                
    
            </div>
            { props.children }
        </div>
        <Calendar trigger={calendarButton} setTrigger={setCalendarButton} />
    </div>
  ) : ""
}

export default BookingPopUp