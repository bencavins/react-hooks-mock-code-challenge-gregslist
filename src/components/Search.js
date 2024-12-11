import React from "react";

function Search({ setSearchString }) {

  function handleSubmit(e) {
    e.preventDefault()
    setSearchString(e.target.search.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        name="search"
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
