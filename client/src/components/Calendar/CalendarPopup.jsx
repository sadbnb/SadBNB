import "./calendarpopup.scss";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { useBookingContext } from "../context/BookingContext";

const CalendarPopup = ({
  bookingId,
  setIsEditMode,
  value: date,
  isEditMode,
}) => {
  const [newDates, setNewDates] = useState(date);

  const { updateBooking } = useBookingContext();

  const handleConfirmUpdateBooking = () => {
    const newBookingDates = {
      start_date: newDates[0],
      end_date: newDates[1],
    };

    updateBooking(bookingId, newBookingDates);
    setIsEditMode(false);
  };

  const handleOnChange = (newSelectedDate) => {
    setNewDates(newSelectedDate);
  };

  return (
    <div className="calendar-container">
      <button
        className="calendar-close"
        onClick={() => setIsEditMode(!isEditMode)}
      >
        X
      </button>
      <Calendar onChange={handleOnChange} value={newDates} selectRange />

      <button className="btn" onClick={handleConfirmUpdateBooking}>
        CONFIRM
      </button>
    </div>
  );
};
export default CalendarPopup;
