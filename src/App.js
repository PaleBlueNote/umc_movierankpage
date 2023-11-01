import { movies } from './movieDummy';
import Movie from './components/Movie';

function App() {
  // movies.results에서 16개까지만 가져오기
  const limitedMovies = movies.results.slice(0, 16);

  return (
    <div className="app-container">
        {limitedMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
    </div>
  );
}

export default App;


