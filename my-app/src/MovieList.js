import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import sortByRating from './sortByRating';


function MovieList(){

const sortByRating = () => {
        const newMovies = [...sortedMovies];
        newMovies.sort((a, b) => b.rating - a.rating);
        setSortedMovies(newMovies);
    };

}

export default MovieList;