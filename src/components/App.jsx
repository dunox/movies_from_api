import React from "react";
import { MovieItem } from "./MovieItem";
import { moviesData } from "../moviesData";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
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
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
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
