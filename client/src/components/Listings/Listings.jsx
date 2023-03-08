import "./listing.scss";
import {useState, useEffect} from "react";
import Listing from "../ListingCard/ListingCard";

const Listings = () => {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/apartments")
    .then((r) => r.json())
    .then((apartments) => 
      setApartments(apartments));
  },[]);

  // fetch apartments
  return (
    <div>
      {apartments.map((apartment) => (
        <Listing 
          apartment={apartment}
          key={apartment.id}
        />
      ))}
    </div>
  )
};
export default Listings;
