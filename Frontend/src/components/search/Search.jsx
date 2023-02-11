import React from "react";
import "./search.css";

const Search = () => {
  return (
    <div id="container">
      <div id="side">
        <img src="./logo.svg" alt="" srcset="" />
        <div id="searchBar">
          <input
            type="search"
            name="search"
            placeholder="Search NGOs here"
            id="search"
          />
        </div>
      </div>
      <div id="side">
        <div id="sidePanel"></div>
        <div id="mainPanel"></div>
      </div>
    </div>
  );
};

export default Search;
