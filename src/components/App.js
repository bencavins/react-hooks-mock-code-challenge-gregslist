import React from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

import { useState, useEffect } from "react";

function App() {

  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, [])

  return (
    <div className="app">
      <Header setSearch={setSearch} />
      <ListingsContainer listings={listings} search={search} setListings={setListings} />
    </div>
  );
}

export default App;
