import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, search, setListings }) {

  const filteredListings = listings.filter(listing => {
    const descLower = listing.description.toLowerCase()
    const searchLower = search.toLowerCase()
    return descLower.includes(searchLower)
  })

  return (
    <main>
      <ul className="cards">
        {filteredListings.map(listing => {
          return <ListingCard key={listing.id} {...listing} setListings={setListings} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
