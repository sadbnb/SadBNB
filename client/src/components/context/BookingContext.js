import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
const BookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookingItems, setBookingItems] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await axios.get("/bookings");
        setBookingItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchBookings();
  }, []);

  const getAllBookings = async () => {
    try {
      let data = await axios.get("/bookings");
      setBookingItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  const addBooking = async (booking) => {
    try {
      const response = await axios.post("/bookings", booking);

      const newBooking = { ...response.data, ...booking };

      setBookingItems([...bookingItems, newBooking]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeBooking = async (id) => {
    try {
      await axios.delete(`/bookings/${id}`);
      const newData = bookingItems.filter((post) => post.id !== id);
      setBookingItems(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBooking = async (bookingId, newBookingDates) => {
    try {
      const response = await axios.patch(
        `/bookings/${bookingId}`,
        newBookingDates
      );

      let bookingItemsCopy = [...bookingItems];

      const indexOfUpdatedBooking = bookingItemsCopy.findIndex(
        (booking) => booking.id === bookingId
      );

      bookingItemsCopy[indexOfUpdatedBooking] = response.data;

      setBookingItems(bookingItemsCopy);
      // setBookingItems([...bookingItems, newData]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BookingContext.Provider
      value={{
        bookingItems,
        setBookingItems,
        addBooking,
        getAllBookings,
        removeBooking,
        updateBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  return useContext(BookingContext);
};

export { BookingProvider };
