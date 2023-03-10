import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "./calendar.scss";
import "react-calendar/dist/Calendar.css";
import { useBookingContext } from "../../context/BookingContext";
import { useAppContext } from "../../context/AppContext";

const CalendarComponent = (props) => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const navigate = useNavigate();
  const { addBooking } = useBookingContext();
  const { user } = useAppContext();

  const handleOnChange = (newDates) => {
    setDate(newDates);
  };

  const handleAddBooking = () => {
    const { title, location, id } = props.details;

    const startDateStr = date[0];
    const endDateStr = date[1];

    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const options = { month: "long", day: "numeric", year: "numeric" };

    const formattedStartDate = startDate.toLocaleDateString("en-US", options);
    const formattedEndDate = endDate.toLocaleDateString("en-US", options);

    const bookingData = {
      title,
      location,
      apartment_id: id,
      user_id: user.id,
      start_date: formattedStartDate,
      end_date: formattedEndDate,
    };

    addBooking(bookingData);
    navigate("/bookings");
  };

  return props.trigger ? (
    <div className="calendar-container">
      <button
        className="calendar-close"
        onClick={() => props.setTrigger(false)}
      >
        X
      </button>
      <Calendar onChange={handleOnChange} value={date} selectRange />
      {props.children}
      <button className="btn" onClick={handleAddBooking}>
        CONFIRM
      </button>
    </div>
  ) : (
    ""
  );
};

export default CalendarComponent;
