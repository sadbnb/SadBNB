import "./BookingPopUp.scss";

import BookingCard from "../BookingCard/BookingCard";

function BookingPopUp(props) {
  const { trigger, setTrigger, interiors, description } = props;

  // const { trigger, setTrigger, interiors, description } = props;

  return trigger ? (
    <>
      {interiors.map((interior) => {
        console.log(interior.image);
        return (
          <div>
            <BookingCard
              key={interior.id}
              interior={interior}
              setTrigger={setTrigger}
              description={description}
            />
          </div>
        );
      })}
    </>
  ) : (
    ""
  );
}

export default BookingPopUp;
