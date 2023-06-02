import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function MovieForm({ addMovie, setMovies, movies }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !rating) {
      alert('Vänligen fyll in både titel och betyg!');
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
            placeholder="Titel här..." 
            value={title} 
            onChange={e => setTitle(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Select 
            aria-label="Välj betyg här..."
            value={rating} 
            onChange={e => setRating(e.target.value)}
          >
            <option value="">Välj betyg här...</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Select>
        </Col>
        <Col xs="auto">
          <Button variant="primary" type="submit">
            Spara film
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={sortByTitle}>
            Alfabetisk ordning
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary" onClick={sortByRating}>
            Betygsordning
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default MovieForm;