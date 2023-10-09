import React from "react"

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average}) {
    return(
        <div className="movie-container">
            <img src={BASE_URL + poster_path} alt="영화 포스터" />
            <div className="movie-info">
                <h4>{title}</h4>
                <span>{vote_average}</span>
            </div>
            
        </div>
    );
}

export default Movie;