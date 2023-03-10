import "./bookings.scss";

import BookingItem from "../BookingItem/BookingItem";
import EmptyBooking from "../EmptyBooking/EmptyBooking";

import { useBookingContext } from "../context/BookingContext";

const Bookings = () => {
  const { bookingItems } = useBookingContext();

  return (
    <div className="booking-container">
      {bookingItems.length === 0 ? (
        <EmptyBooking />
      ) : (
        <div className="booking-items">
          <h1 className="booking-heading">My Bookings</h1>
          <div className="booking-menu">
            {bookingItems.map((item) => {
              return <BookingItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Bookings;
