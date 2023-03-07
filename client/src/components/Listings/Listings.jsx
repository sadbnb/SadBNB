import "./listings.scss";

const Listings = () => {
  return (
  <div>
    <ul className="cards">
      {cards.map(card => {
      return <ListingCard key={card.id} card={card} />
      })}
    </ul>
  </div>
  )
};
export default Listings;
