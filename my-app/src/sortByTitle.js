import React from 'react';

function sortByTitle({ onSort }) {
    return <button onClick={onSort} className="btn btn-secondary m-1">Sortera efter titel</button>;
}

export default sortByTitle;