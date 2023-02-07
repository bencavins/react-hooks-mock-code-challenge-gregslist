import React from "react";

function Search({search, setSearch}) {
  function handleSubmit(e) {
    e.preventDefault();
    handleChange(e)
  }

  function handleChange(event) {
    setSearch(event.target[0].value)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        // value={search}
        // onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
