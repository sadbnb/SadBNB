import "./listing.scss";
import {useState, useEffect} from "react";
import Listing from "../ListingCard/ListingCard";
import ListingCard from "../ListingCard/ListingCard";

const Listings = () => {
  const [apartments, setApartments] = useState([]);
  // console.log(apartments)

  useEffect(() => {
    fetch("http://localhost:3000/apartments")
    .then((r) => r.json())
    .then((apartmentsData) => 
      setApartments(apartmentsData));
  },[]);

  

  // fetch apartments
  return (
    <div className="card-container">
    <div className="card-grid">
      {apartments.map((apartment) => (
        <ListingCard
          apartment={apartment}
          key={apartment.id}
        />
      ))
}
</div>
      </div>
  )}

  export default Listings