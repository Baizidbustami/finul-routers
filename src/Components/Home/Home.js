
import { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'
const Home = () => {
    const [tShirts, setTShirts]=useTShirt()
    const [cart, setCart]=useState([]);

    // add Button
    
    const hendalingCart=(selectedItem)=>{
        const newCart=[...cart,selectedItem];
        setCart(newCart);
    }

    // Remove button

    const hendleRemoveFromCar = (selectedItem)=>{
        const rest = cart.filter(tShirts=>tShirts.id !==selectedItem.id );
        setCart(rest);
    }
    
    return (
   <div>
        <div className='home-Container'>
            <div className='mahi'>
               {
                   tShirts.map(tshairt=><TShirt tshairt={tshairt} hendalingCart={hendalingCart}></TShirt>)
               }
          </div>
            <div className="cart-container">
                <Cart cart={cart} hendleRemoveFromCar={hendleRemoveFromCar}></Cart>
            
            </div>
        </div>
        </div>
    );

};

export default Home;