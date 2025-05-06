import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovie = ({ onAddMovie }) => {
  const [show, setShow] = useState(false);
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 0
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: name === 'rating' ? Number(value) : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({
      title: '',
      description: '',
      posterURL: '',
      rating: 0
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ margin: '20px' }}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newMovie.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newMovie.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="posterURL">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="url"
                name="posterURL"
                value={newMovie.posterURL}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="rating">
              <Form.Label>Rating (0-10)</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10"
                name="rating"
                value={newMovie.rating}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
              Add Movie
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMovie;