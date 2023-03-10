import "./bookings.scss";

import BookingItem from "../BookingItem/BookingItem";
import EmptyBooking from "../EmptyBooking/EmptyBooking";

import { useBookingContext } from "../context/BookingContext";

const Bookings = () => {
  const { bookingItems } = useBookingContext();

  return (
    <>
      {bookingItems.length === 0 ? (
        <EmptyBooking />
      ) : (
        <div className="orders">
          <h1 className="orders-heading">My Bookings</h1>
          <div className="orders-menu">
            {bookingItems.map((item) => {
              return <BookingItem key={item.id} item={item} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Bookings;
