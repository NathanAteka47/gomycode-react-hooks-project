import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, description, posterURL, rating }) => {
  return (
    <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card style={{ 
        width: '18rem', 
        margin: '10px',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        ':hover': {
          transform: 'scale(1.03)'
        }
      }}>
        <Card.Img 
          variant="top" 
          src={posterURL} 
          alt={title} 
          style={{ height: '400px', objectFit: 'cover' }} 
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 100 
              ? `${description.substring(0, 100)}...` 
              : description}
          </Card.Text>
          <Card.Text>
            <strong>Rating:</strong> {rating}/10
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.defaultProps = {
  id: 0,
  title: "Untitled Movie",
  description: "No description available",
  posterURL: "https://via.placeholder.com/300x450",
  rating: 0
};

export default MovieCard;