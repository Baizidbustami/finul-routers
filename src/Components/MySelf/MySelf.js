import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house,ornament}) => {
    return (
        <div>
            <h1>MySelf</h1>
            <p>house: {house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;