import React, { useState } from 'react';

function Movie({ movie }) {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <div className="movies-container" style={{ position: 'relative' }}>
      <div className="image-container">
        <img
          className="image"
          src={movie.poster_path}
          alt={movie.title}
          onMouseEnter={() => setShowOverview(true)}
          onMouseLeave={() => setShowOverview(false)}
        />
      </div>
      <div
        className="overview-container"
        style={{
          display: showOverview ? 'block' : 'none',
          position: 'absolute', // 절대 위치 지정
          top: 0, // 상단에 위치
          left: 0, // 왼쪽에 위치
          width: '8.75rem', // 동일한 크기로 맞춤
          height: '14.75rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경 색상
          padding: '10px', // 내부 여백
          zIndex: 1,
          overflow: 'hidden' // 다른 요소 위에 표시
        }}
      >
        <h2 className="title">{movie.title}</h2>
        <p className="overview">{movie.overview}</p>
      </div>
      <div className="inform-container">
        <h2 className="title">{movie.title}</h2>
        <p className="grade">{movie.vote_average}</p>
      </div>
    </div>
  );
}

export default Movie;
