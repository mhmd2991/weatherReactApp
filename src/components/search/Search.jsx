import React, { useState } from "react";
import "./search.css";

export default function Search({onSearch}) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

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
