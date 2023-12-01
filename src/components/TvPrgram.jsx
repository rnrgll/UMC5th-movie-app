import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function TvPrgram({name, original_name, poster_path, vote_average, overview}) {
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
      navigate(`/tv/${name}`, {
        state: { name, original_name, poster_path, vote_average, overview },
      });
    };
  
    return (
      <div
        className="movie-container"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={onClickImg}
      >
        <img src={BASE_URL + poster_path} alt="tv 포스터" />
        <div className="movie-info">
          <h4>{name}</h4>
          <span>{vote_average}</span>
        </div>
        <div className={`movie-overview ${hide ? 'hide' : ''}`}>
          <h4>{name}</h4>
          <h4>{original_name}</h4>
          <p>{overview}</p>
        </div>
      </div>
    );
}
