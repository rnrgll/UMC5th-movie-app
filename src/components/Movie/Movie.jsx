import React, { useState } from "react"
import  * as MCS from '../MovieContainer/MovieContainer.style';
import  * as MOS from '../MovieOverview/MovieOverview.style';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average, overview}) {
    const [hide, setHide] = useState(true);

    const handleMouseOver = () => {
        setHide(false);
        console.log('mouseON');
    };

    const handleMouseOut = () => {
        setHide(true);
        console.log('mouseOUT');
    };


    return(
        <MCS.MovieContainer
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <MCS.MovieImage src={BASE_URL + poster_path} alt="영화 포스터" />
            <MCS.MovieInfo>
                <MCS.MovieTitle>{title}</MCS.MovieTitle>
                <MCS.MovieVote>{vote_average}</MCS.MovieVote>
            </MCS.MovieInfo>
            <MOS.MovieOverview hide={hide}>
                <MOS.MovieOverviewTitle>{title}</MOS.MovieOverviewTitle>
                <MOS.MovieOverviewText>{overview}</MOS.MovieOverviewText>
                {/*<MOS>MovieOverviewText>의 스타일이 따로 없으므로 이 부분을 삭제하고 그냥 <p>{overivew}</p>로 작성해도 된다.*/}
            </MOS.MovieOverview>
        </MCS.MovieContainer>
    );
}

export default Movie;