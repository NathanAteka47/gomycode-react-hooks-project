import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <Row>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </Row>
  );
};

export default MovieList;