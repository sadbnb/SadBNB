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

  const startDateStr = newDates[0];
  const endDateStr = newDates[1];

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const options = { month: "long", day: "numeric", year: "numeric" };

  const formattedStartDate = startDate.toLocaleDateString("en-US", options);
  const formattedEndDate = endDate.toLocaleDateString("en-US", options);

  const { updateBooking } = useBookingContext();

  const handleConfirmUpdateBooking = () => {
    const newBookingDates = {
      start_date: formattedStartDate,
      end_date: formattedEndDate,
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
