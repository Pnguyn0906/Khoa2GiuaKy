import "./App.css";
import Header from "./Header/header";
import MovieDisplay from "./Body/bodymain.jsx";
import data from "./Body/data.jsx";
import Body from "./Body/body.jsx";

function App() {
  return (
    <>
      <Header />
      <Body />
      <div className="movie-container">
        {data.map((movie) => (
          <MovieDisplay key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
