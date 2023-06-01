import React, { useState } from "react";

function ListingCard({ id, description, image, location, setListings }) {

  const [isFave, setIsFave] = useState(false)

  function handleClick() {
    setIsFave(prev => !prev)
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/?description=${description}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => setListings(prevListings => {
      return prevListings.filter(listing => {
        return listing.id !== id
      })
    }))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFave ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
