import "./listingcard.scss";
import {useState} from "react";

const ListingCard = ({
    apartment
  }) => {
  // fetch apartment details
  return (
    <div>
      <td>{apartment.title}</td>
      <br/>
      <td>{apartment.location}</td>
      <br/>
      <td>{apartment.details}</td>
      <br/>
      <img src={apartment.main_image} alt="apt-image" />
    </div>
  )
};
export default ListingCard;
