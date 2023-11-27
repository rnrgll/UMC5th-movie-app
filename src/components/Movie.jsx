import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({ title, poster_path, vote_average, overview }) {
    const [hide, setHide] = useState(true);
  
    const handleMouseOver = () => {
      setHide(false);
      console.log('mouseON');
    }
  
    const handleMouseOut = () => {
      setHide(true);
      console.log('mouseOUT');
    }
  
    const navigate = useNavigate();
  
    const onClickImg = (event) => {
      event.preventDefault(); // 기본 동작 막기
      navigate(`/movie/${title}`, {
        state: { title, poster_path, vote_average, overview },
      });
    };
  
    return (
      <div
        className="movie-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClickImg}
      >
        <img src={BASE_URL + poster_path} alt="영화 포스터" />
        <div className="movie-info">
          <h4>{title}</h4>
          <span>{vote_average}</span>
        </div>
        <div className={`movie-overview ${hide ? 'hide' : ''}`}>
          <h4>{title}</h4>
          <p>{overview}</p>
        </div>
      </div>
    );
  }
  

export default Movie;