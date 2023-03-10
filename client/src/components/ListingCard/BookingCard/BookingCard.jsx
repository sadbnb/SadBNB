import React from "react";
import { useState } from "react";
import "./BookingCard.scss";
import Calendar from "../Calendar/Calendar";

const BookingCard = ({ interior, setTrigger, description, details }) => {
  const [calendarButton, setCalendarButton] = useState(false);
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="pics-container">
          <button className="close-btn" onClick={() => setTrigger(false)}>
            X
          </button>
          <section className="gallery">
            <div className="gallery__item">
              <input
                type="radio"
                id="img-1"
                checked
                name="gallery"
                className="gallery__selector"
              />
              <img className="gallery__img" src={interior.image} alt="img" />
            </div>
          </section>

          <h3 className="apt-details">{description}</h3>
          <button
            className="book-btn"
            onClick={() => setCalendarButton(!calendarButton)}
          >
            BOOK
          </button>
        </div>
        {/* { props.children } */}
      </div>
      <Calendar
        details={details}
        trigger={calendarButton}
        setTrigger={setCalendarButton}
      />
    </div>
  );
};

export default BookingCard;
