import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  // create state variable for listings data
  const [listings, setListings] = useState([])
  // create a state variable for the search string
  const [searchString, setSearchString] = useState("")

  // fetch the listing data
  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then(resp => resp.json())
    .then(jsonData => {
      // save the listings data in state
      setListings(jsonData)
    })
  }, [])

  // filter out listings that don't contain the search string
  const filteredListings = listings.filter(listing => {
    if (listing.description.toLowerCase().includes(
      searchString.toLowerCase()
    )) {
      return listing
    }
  })

  return (
    <div className="app">
      <Header setSearchString={setSearchString} />
      <ListingsContainer 
        listings={filteredListings} 
        setListings={setListings} />
    </div>
  );
}

export default App;
