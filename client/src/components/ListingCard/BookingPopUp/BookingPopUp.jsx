import "./BookingPopUp.scss";

import BookingCard from "../BookingCard/BookingCard";

function BookingPopUp(props) {
  const { trigger, setTrigger, interiors, description, details } = props;

  return trigger ? (
    <>
      {interiors.map((interior) => {
        return (
          <BookingCard
            details={details}
            key={interior.id}
            interior={interior}
            setTrigger={setTrigger}
            description={description}
          />
        );
      })}
    </>
  ) : (
    ""
  );
}

export default BookingPopUp;
