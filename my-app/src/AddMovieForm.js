import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function MovieForm({ addMovie, setMovies, movies }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !rating) {
      alert('Please fill in both the title and rating!');
      return;
    }
    addMovie(title, rating);
    setTitle('');
    setRating('');
  };

  const sortByTitle = () => {
    const sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
    setMovies(sortedMovies);
  };

  const sortByRating = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);
    setMovies(sortedMovies);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row>
        <Col>
          <Form.Control 
            placeholder="Movie Title" 
            value={title} 
            onChange={e => setTitle(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Select 
            aria-label="Rating Select"
            value={rating} 
            onChange={e => setRating(e.target.value)}
          >
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Add Movie
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={sortByTitle}>
            Sort by Title
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={sortByRating}>
            Sort by Rating
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default MovieForm;