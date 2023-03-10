import "./Bookingitem.scss";
import { useBookingContext } from "../context/BookingContext";
import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import CalendarPopup from "../Calendar/CalendarPopup";

const BookingItem = ({ item }) => {
  const [date, setDate] = useState([new Date(), new Date()]);
  const [isEditMode, setIsEditMode] = useState(false);

  const { removeBooking } = useBookingContext();

  const handleOnChange = (newDates) => {
    setDate(newDates);
  };

  const handleRemoveBooking = () => {
    removeBooking(item.id);
  };

  return (
    <div className="card-item">
      <div className="item">
        {isEditMode ? (
          <CalendarPopup
            onChange={handleOnChange}
            value={date}
            setIsEditMode={setIsEditMode}
            isEditMode={isEditMode}
            bookingId={item.id}
          />
        ) : (
          ""
        )}
        <div className="container">
          <h3>{`Hotel : ${item.apartment ? item.apartment?.title : ""}`}</h3>
          <h3>{`Location: ${
            item.apartment ? item.apartment?.location : ""
          }`}</h3>

          <h3>
            {`Date : ${item.start_date} -
              ${item.end_date}`}
          </h3>

          <img src={item.apartment ? item.apartment?.main_image : ""} alt="" />
        </div>
        <div className="btn">
          <button onClick={() => setIsEditMode(!isEditMode)}>Edit</button>
          <button onClick={handleRemoveBooking}>Delete</button>
        </div>
      </div>
    </div>
  );
};
export default BookingItem;
