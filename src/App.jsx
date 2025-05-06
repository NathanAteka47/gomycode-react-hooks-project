import { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const App = () => {
  // Initial movie data
  const initialMovies = [
    {
      title: "Inception",
      description: "A thief who steals corporate secrets through dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_UF1000,1000_QL80_.jpg",
      rating: 8
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years.",
      posterURL: "https://m.media-amazon.com/images/I/71bGZL-lrLL._AC_UF1000,1000_QL80_.jpg",
      rating: 9
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
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= (filterRating || 0)
    );
  });

  return (
    <Container>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>My Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        onFilterChange={handleFilterChange}
      />
      <AddMovie onAddMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </Container>
  );
};

export default App;