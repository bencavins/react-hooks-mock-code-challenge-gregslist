import React, { useState } from "react";

function ListingCard({ id, image, description, location, setListings }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleClick(event) {
    setIsFavorite(!isFavorite)  // isFavoite = !isFavorite
  }

  function handleFavorite(event) {
    setIsFavorite(true)  // isFavorite = true
  }

  function handleUnfavorite(event) {
    setIsFavorite(false)  // isFavorite = false
  }

  function handleDeleteClick(event) {
    setListings(existingListings => existingListings.filter(listing => {
      // filter out listing that matched the current listing id
      if (listing.id !== id) {
        return listing
      }
    }))

    // send a DELETE request to the db
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(jsonData => console.log(jsonData))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
