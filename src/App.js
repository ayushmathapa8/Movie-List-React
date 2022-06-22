import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./App.css";
import CustomCard from "./components/CustomCard";

import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovieInfo } from "./helpers/axiosHelper";

function App() {
  const [movie, setMovie] = useState({});
  const [showError, setShowError] = useState("");

  const [movieList, setMovieList] = useState([]);

  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);

    if (result.Response === "True") {
      setMovie(result);
      setShowError("");
    } else {
      setMovie({});
      setShowError(result.Error);
    }
  };

  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };

  const deleteMovie = (ayu) => {
    if (window.confirm("Are you sure you want to delete the movie")) {
      const filteredArg = movieList.filter((item) => item.imdbID !== ayu);
      setMovieList(filteredArg);
    }
  };

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          <div>
            {movie.imdbID && (
              <CustomCard
                movie={movie}
                func={movieSelect}
                inSearchForm={true}
              />
            )}
            {showError && <Alert variant="danger">{showError}</Alert>}
          </div>
        </div>

        <hr />

        <MovieList movieList={movieList} deleteMovie={deleteMovie} />
      </Container>
    </div>
  );
}

export default App;
