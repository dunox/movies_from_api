import React from "react";
import { API_KEY_3, API_URL } from "../utils/api";
import { MovieItem } from "./MovieItem";
import MovieTabs from "./MovieTabs";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sortBy: "popularity.desc"
    };
  }
  componentDidMount() {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          movies: data.results
        });
      });
  }
  removeMovie = (movie) => {
    const updateMovie = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });
    this.setState({
      movies: updateMovie
    });
  };
  addMovieWillWatch = (movie) => {
    const updateWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateWillWatch
    });
  };
  removeMovieWillWatch = (movie) => {
    const updateWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateWillWatch
    });
  };
  updateSortBy = (value) => {
    this.setState({
      sortBy: value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row mb-4">
              <div className="col-12">
                <MovieTabs
                  sortByMoviesList={this.state.sortBy}
                  updateSortBy={this.updateSortBy}
                />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6" key={movie.id}>
                    <MovieItem
                      movie={movie}
                      removeMovie={this.removeMovie}
                      addMovieWillWatch={this.addMovieWillWatch}
                      removeMovieWillWatch={this.removeMovieWillWatch}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3">
            <p>Will Watch:{this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
