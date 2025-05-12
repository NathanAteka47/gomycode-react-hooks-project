import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import MovieDetails from './components/MovieDetails';

const App = () => {
  // Enhanced initial movie data with trailer links
  const initialMovies = [
    {
      id: 1,
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "./src/assets/inception.jpg",
      rating: 8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years.",
      posterURL: "./src/assets/redemption.jpg",
      rating: 9,
      trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    }
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleFilterChange = (type, value) => {
    if (type === 'title') {
      setFilterTitle(value);
    } else {
      setFilterRating(value);
    }
  };

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating || 0)
    );
  });

  return (
    <Router>
      <Container>
        <h1 style={{ textAlign: 'center', margin: '20px 0' }}>My Movie App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <Filter
                filterTitle={filterTitle}
                filterRating={filterRating}
                onFilterChange={handleFilterChange}
              />
              <AddMovie onAddMovie={addMovie} />
              <MovieList movies={filteredMovies} />
            </>
          } />
          <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;