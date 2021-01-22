import React from "react";

const MovieTabs = (props) => {
  const { sortByMoviesList, updateSortBy } = props;
  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={`nav-link ${
            sortByMoviesList === "popularity.desc" ? "active" : ""
          }`}
          onClick={() => {
            updateSortBy("popularity.desc");
          }}
        >
          Popularity
        </div>
      </li>
      <li>
        <div
          className={`nav-link ${
            sortByMoviesList === "revenue.desc" ? "active" : ""
          }`}
          onClick={() => {
            updateSortBy("revenue.desc");
          }}
        >
          Revenue
        </div>
      </li>
      <li>
        <div
          className={`nav-link ${
            sortByMoviesList === "primary_release_date.desc" ? "active" : ""
          }`}
          onClick={() => {
            updateSortBy("primary_release_date.desc");
          }}
        >
          Release Date
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;
