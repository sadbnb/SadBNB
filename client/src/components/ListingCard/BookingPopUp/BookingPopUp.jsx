import "./BookingPopUp.scss";

import BookingCard from "../BookingCard/BookingCard";

function BookingPopUp(props) {
  const { trigger, setTrigger, interiors, description, details } = props;

<<<<<<< HEAD
  return trigger ? (
    <div className="popup-container">
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
    </div>
  ) : (
    ""
  );
=======
    const { trigger, setTrigger, interiors, description } = props


 

  return (trigger) ? (
    <>
      {
        interiors.map((interior) => {
          console.log(interior.image)
          return (
          <div>
            <BookingCard key={interior.id} interior={interior} setTrigger={setTrigger} description={description}/>
          </div>
          );
        })
      } 
       
    </>
  ) : ""
>>>>>>> b83f7a809356af380a6cc272160014ae38b31f8f
}

export default BookingPopUp;
