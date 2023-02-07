import React, {useState} from "react";

function ListingCard({id, description, image, location, setListings}) {
  const [isFave, setIsFave] = useState(false)

  function handleClick(event) {
    setIsFave(prev => !prev)
  }

  function handleDelete(event) {
    // to persist, do a fetch
    setListings(prevArray => prevArray.filter(listing => {
      // if (listing.id === id) {
      //   return false
      // } else {
      //   return true
      // }
      return listing.id !== id
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
          <button 
            className="emoji-button favorite active"
            onClick={handleClick}>★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
