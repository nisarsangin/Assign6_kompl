import React, { useState } from 'react';
import MovieItem from './MovieItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import sortByTitle from './sortByTitle';
import sortByRating from './sortByRating';

function MovieList({ movies, onDeleteMovie }) {
    const [sortedMovies, setSortedMovies] = useState(movies);

    const sortByTitle = () => {
        const newMovies = [...sortedMovies];
        newMovies.sort((a, b) => a.title.localeCompare(b.title));
        setSortedMovies(newMovies);
    };

    const sortByRating = () => {
        const newMovies = [...sortedMovies];
        newMovies.sort((a, b) => b.rating - a.rating);
        setSortedMovies(newMovies);
    };

    return (
        <Container>
            <Row>
                <sortByTitle onClick={sortByTitle} />
                <sortByRating onClick={sortByRating} />
            </Row>
            <Row>
                {sortedMovies.map((movie, index) => (
                    <MovieItem key={index} movie={movie} onDelete={() => onDeleteMovie(index)} />
                ))}
            </Row>
        </Container>
    );
}

export default MovieList;
