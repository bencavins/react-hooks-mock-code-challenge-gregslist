import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        {/* map every listing object to a <ListingCard /> component */}
        {listings.map((listing) => {
          // return <ListingCard description={listing.description} image={listing.image} />
          // pass all listing data to ListingCard as props
          return <ListingCard key={listing.id} {...listing} />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
