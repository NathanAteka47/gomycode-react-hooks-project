import { Card } from 'react-bootstrap';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={posterURL} alt={title} style={{ height: '400px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {rating}/10
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.defaultProps = {
  title: "Untitled Movie",
  description: "No description available",
  posterURL: "https://via.placeholder.com/300x450",
  rating: 0
};

export default MovieCard;