import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
const BASE_URL = "https://image.tmdb.org/t/p/w1280/";


export default function MovieDetail() {
    //url로 넘겨받은 title
    const {title} = useParams();

    //네비게이트 훅을 통해 페이지 이동 시에 넘겨 받은 정보
    const {state} = useLocation();
    console.log(title);
    console.log(state);

  return (
    <div className='movie-detail__box'>
        <div
        className="movie-container movie-detail__poster"
         >
            <img src={BASE_URL + state.poster_path} alt="영화 포스터" />
        </div>

        <div className='movie-detail__info'>
            <div className='movie-info__head'>
            <h1>{title}</h1>
            <h1>|</h1>
            <span>평점 : {state.vote_average}</span>
            </div>
            <p className='movie-info__detail'>{state.overview}</p>
        </div>
    </div>
  )
}
