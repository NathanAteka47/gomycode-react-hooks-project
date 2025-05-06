import { Form } from 'react-bootstrap';

const Filter = ({ filterTitle, filterRating, onFilterChange }) => {
  return (
    <Form style={{ margin: '20px' }}>
      <Form.Group controlId="titleFilter">
        <Form.Label>Filter by Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie title"
          value={filterTitle}
          onChange={(e) => onFilterChange('title', e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="ratingFilter">
        <Form.Label>Filter by Minimum Rating</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="10"
          placeholder="Enter minimum rating"
          value={filterRating}
          onChange={(e) => onFilterChange('rating', e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Filter;