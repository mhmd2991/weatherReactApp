import React, { useState } from "react";
import "./search.css";

export default function Search({onSearch}) {
/*
This line defines a state variable called search
and sets its initial value to an empty string.
setSearchTerm is a function that allows us to
update the value of search. 
*/
  const [search, setSearch] = useState("");

/*
This line defines a function called handleChange
which is called whenever the value of the input field changes.
It updates the value of search to the value of the input field.
*/
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

/*
This line defines a function called handleSubmit
which is called when the form is submitted.
It prevents the default form submission behavior
and calls the onSearch callback function,
passing in the search as an argument. 
*/

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search)
  };

  return (
    <div className="form-container">
      <form action="#" onSubmit={handleSubmit}>
        <div className="form-group">
          <i className="fa-solid fa-location-dot"></i>
          <input
            type="text"
            placeholder="Enter Country Name"
            onChange={handleChange}
            value={search}
          />
          <button className="search-btn" type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    </div>
  );
}
