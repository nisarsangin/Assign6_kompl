import React from 'react';

function sortByRating({ onSort }) {
    return <button onClick={onSort} className="btn btn-secondary m-1">Sortera efter betyg</button>;
}

export default sortByRating;