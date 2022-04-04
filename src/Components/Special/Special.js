import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h5>Spasel</h5>
            <p><small>Gift: {ornament}</small></p>
            <p><small>Gift: {ring}</small></p>
        </div>
    );
};

export default Special;