import "./listingcard.scss";
import { useState } from "react";
import BookingPopUp from "./BookingPopUp/BookingPopUp";

const ListingCard = ({ apartment }) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className="product-container">
      <div className="card-grid">
        <a className="card" href="#">
          <img className="card__background" src={apartment.main_image} />
          <div className="card__content">
            <p className="card__category">{apartment.title}</p>
            <h3 className="card__heading">{apartment.location}</h3>
            <button className="view-btn" onClick={() => setButtonPopup(true)}>
              VIEW
            </button>
          </div>
        </a>
      </div>

      <BookingPopUp
        details={apartment}
        interiors={apartment.interiors}
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        description={apartment.details}
      />
    </div>
  );
};

export default ListingCard;
