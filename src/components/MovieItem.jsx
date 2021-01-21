import React from "react";
import "../index.css";

export class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }
  render() {
    const {
      movie,
      removeMovie,
      addMovieWillWatch,
      removeMovieWillWatch
    } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-0">Rating: {movie.vote_average}</p>
            <button
              type="button"
              className={
                this.state.willWatch ? "btn btn-warning" : "btn btn-success"
              }
              onClick={() => {
                this.setState({
                  willWatch: !this.state.willWatch
                });
                {
                  this.state.willWatch
                    ? removeMovieWillWatch(movie)
                    : addMovieWillWatch(movie);
                }
              }}
            >
              {this.state.willWatch ? "Won't Watch" : "Will Watch"}
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={removeMovie.bind(null, movie)}
            >
              Delete Movie
            </button>
          </div>
        </div>
      </div>
    );
  }
}
