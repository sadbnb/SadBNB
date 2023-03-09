import "./bookings.scss";
import Logo from "../Logo/Logo";
import BookingItem from "../BookingItem/BookingItem";
import EmptyBooking from "../EmptyBooking/EmptyBooking";
// import { useNavigate } from 'react-router-dom';

const Bookings = ({ MenuItemsData }) => {
  return (
    <>
      <EmptyBooking />
      <div className="orders">
        <h1 className="orders-heading">My Bookings</h1>
        <div className="orders-menu">
          <BookingItem list={MenuItemsData} />
        </div>
        <h3 className="orders-total"> Your Total $23</h3>
      </div>
    </>
  );
};
export default Bookings;
