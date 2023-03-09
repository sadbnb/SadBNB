import React from "react";
import "./emptybooking.scss";
import { FaHotel } from "react-icons/fa";
import { useNavigate } from "react-router";

const EmptyBooking = () => {
  const navigate = useNavigate();

  const redirectToShop = () => {
    navigate("/listings");
  };

  return (
    <div className="empty-booking">
      <FaHotel style={{ height: 100, width: 100 }} />
      <p>You don't have bookings at this time</p>
      <button onClick={redirectToShop}>
        <i className="fas fa-long-arrow-alt-left">Book Now</i>
      </button>
    </div>
  );
};

export default EmptyBooking;
