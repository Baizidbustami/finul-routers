import React from 'react';
import './TShirt.css'

const TShirt = ({hendalingCart, tshairt}) => {
    
    const {name,img,seller}=tshairt

    return (
        <div className='t-shirt'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h4>{seller}</h4>
            <button onClick={()=>hendalingCart(tshairt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;