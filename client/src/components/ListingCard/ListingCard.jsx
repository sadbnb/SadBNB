import "./listingCard.scss";
import BookingPopUp from "../Listings/BookingPopUp/BookingPopUp";
import { useState } from "react";



const ListingCard = () => {

  const [buttonPopup, setButtonPopup] = useState(false)

  return (
  <div className="card-container">
    <section className="hero-section">
  <div className="card-grid">
    <a className="card" href="#">
      <img className="card__background" src="https://luxuryrentalsmanhattan.com/sites/default/files/uploads/penthousewindowslivingroom.jpg"/>
      <div className="card__content">
        <p className="card__category">Luxury apt</p>
        <h3 className="card__heading">NYC</h3>
        <button className="view-btn" onClick={() => setButtonPopup(true)}>View</button>
      </div>
    </a>
    </div>
</section>

<BookingPopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
</div>
  )
}
    
export default ListingCard