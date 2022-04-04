import React from 'react';
import { createPortal } from 'react-dom';
import './Cart.css'
const Cart = ({cart,hendleRemoveFromCar}) => {
    let command;
    if(cart.length===0){
        command = <p>Plasse add at least item the 1</p>
    }
    else if(cart.length===1){
        command = <p>Plase add more...</p>
    }
    else{
        <p>Thanks for add your</p>
    }
    return (
      
        <div>
            <h1>This is cart {cart.length}</h1>
            
            {
                cart.map(TShirt=><p>{TShirt.name}
                <button onClick={()=>hendleRemoveFromCar(TShirt)}>X</button></p>)
            }
            {command}
            {cart.length==3&&<div className='oreng'>valo kaj karco</div>}
            {
                cart.length !==4?<p>keep adding</p>:<button>Remove all</button>
            }
        </div>
    );
};

export default Cart;