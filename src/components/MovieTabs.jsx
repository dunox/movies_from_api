import React from "react";

const MovieTabs = (props) => {
  const { sortByMoviesList, updateSortBy } = props;

  const handleClick = (value) => () => {
    updateSortBy(value);
  };

  const getClassByValue = (value) => {
    return `nav-link ${sortByMoviesList === value ? "active" : ""}`;
  };

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={getClassByValue("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity
        </div>
      </li>
      <li>
        <div
          className={getClassByValue("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue
        </div>
      </li>
      <li>
        <div
          className={getClassByValue("primary_release_date.desc")}
          onClick={handleClick("primary_release_date.desc")}
        >
          Release Date
        </div>
      </li>
    </ul>
  );
};
export default MovieTabs;
