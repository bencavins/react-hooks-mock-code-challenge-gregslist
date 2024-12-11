import React, { useState } from "react";

function ListingCard({ image, description, location }) {
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
    console.log(`deleting ${description}`)
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
