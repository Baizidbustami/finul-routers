import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>   
           <div className='routs-link'>
           <Link to='/home'>Home</Link>
            <Link to='/orderreview'>Order Review</Link>  
            <Link to='/Grandpa'>Gramdpa</Link>
           </div>
           <h1>Welcome to Tshirt Mania!!!</h1>
        </div>
    );
};

export default Header;