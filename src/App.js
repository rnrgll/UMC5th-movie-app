import Movie from "./components/Movie";
import { movies } from "./movie.Dummy";



function App() {
  return (
    <div>
      <div className="app-container">
        { //JSX 안에 자바스크립트 문법 사용할 경우 {}를 사용해야 한다.
          movies.results.map((item) => {
              return (
                <Movie 
                  title = {item.title}
                  poster_path = {item.poster_path}
                  vote_average = {item.vote_average}
                />
              );
          })
        }
      </div>
    </div> 
  );
}

export default App;
