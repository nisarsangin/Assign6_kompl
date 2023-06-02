import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import star from './images/star.png';
import deleteImg from './images/delete.png';

const MovieItem = ({ title, rating, onDelete }) => {
  const stars = Array(Number(rating)).fill().map((_, i) => (
    <img key={i} src={star} alt="Star" style={{ width: '20px', height: '20px' }} />
  ));

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {stars}
            <Button variant="link" onClick={onDelete} style={{ padding: 0, float: 'right' }}>
              <img src={deleteImg} alt="Delete" style={{ width: '20px', height: '20px' }} />
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MovieItem;