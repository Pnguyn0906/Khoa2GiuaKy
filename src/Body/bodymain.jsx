import React from "react";

const MovieDisplay = ({ movie }) => {
  return (
    <div className="movie">
      <h2>{movie.movieName}</h2>
      <p>{movie.description}</p>
      <img src={movie.image} alt={movie.movieName} />
      <p>Episode: {movie.episode}</p>
    </div>
  );
};

export default MovieDisplay;
