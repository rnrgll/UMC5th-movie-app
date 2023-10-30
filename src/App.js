import Movie from "./components/Movie/Movie";
import { movies } from "./movie.Dummy";
import { AppContainer } from "./components/Movie/AppContainer.style";
import React from "react";



function App() {
  return (
      <AppContainer>
        {movies.results.map((item) => {
            return (
              <Movie 
                key={item.id} // Each child in a list should have a unique 'key' prop." 에러 해결
                title = {item.title}
                poster_path = {item.poster_path}
                vote_average = {item.vote_average}
                overview={item.overview}
              />
            );
        })}
      </AppContainer>
  );
}

export default App;
