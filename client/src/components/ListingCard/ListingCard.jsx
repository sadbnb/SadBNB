import "./listingcard.scss";
import {useState} from "react";
import BookingPopUp from "./BookingPopUp/BookingPopUp";

const ListingCard = ({
    apartment
  }) => {
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
  <div className="card-container">
    <section className="hero-section">
  <div className="card-grid">
    <a className="card" href="#">
      <img className="card__background" src="https://luxuryrentalsmanhattan.com/sites/default/files/uploads/penthousewindowslivingroom.jpg"/>
      <img src={apartment.main_image} alt="apt-image" />
      <td>{apartment.title}</td>
      <div className="card__content">
            <td>{apartment.location}</td>
        <p className="card__category">Luxury apartment</p>
              <td>{apartment.details}</td>
        <h3 className="card__heading">NYC</h3>
        <button className="view-btn" onClick={() => setButtonPopup(true)}>VIEW</button>
      </div>
    </a>
    </div>
  </section>

  <BookingPopUp trigger={buttonPopup} setTrigger={setButtonPopup} />
  </div>
  )
}
    
export default ListingCard
