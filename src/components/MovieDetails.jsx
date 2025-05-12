import { useParams, Link } from 'react-router-dom';
import { Card, Button, Container } from 'react-bootstrap';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return (
      <Container className="text-center mt-5">
        <h2>Movie not found</h2>
        <Link to="/">
          <Button variant="primary" className="mt-3">Back to Home</Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Img variant="top" src={movie.posterURL} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <strong>Rating:</strong> {movie.rating}/10
          </Card.Text>
          <Card.Text>{movie.description}</Card.Text>
          <div className="ratio ratio-16x9 mb-3">
            <iframe 
              src={movie.trailer} 
              title={`${movie.title} Trailer`} 
              allowFullScreen
            ></iframe>
          </div>
          <Link to="/">
            <Button variant="primary">Back to Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetails;