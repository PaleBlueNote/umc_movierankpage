import React from 'react';
import '../index.css'; // 새로운 CSS 파일을 import

const baseUrl = "https://image.tmdb.org/t/p/w220_and_h330_face/"

function Movie({ movie }) {
  return (
    <div className="movies-container">
      <div className="image-container">
        <img
          className="image"
          src={baseUrl + movie.poster_path}
          alt={movie.title}
        />
        <div className="overview-container">
          <h2 className="title">{movie.title}</h2>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>
      <div className="inform-container">
        <h2 className="title">{movie.title}</h2>
        <p className="grade">{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default Movie;

