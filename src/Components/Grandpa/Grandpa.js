import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('diamond')
const Grandpa = () => {

    const [house, setHouse]=useState(1);
     const ornament ='Dimoend Ring';
     
    const handleBuyAHouse =()=>{
        const newHouseCout =house+1;
        setHouse(newHouseCout);
    }
    return (
       <RingContext.Provider value='alir romg'>
            <div className='grandpa'>
            <h1>GramdPa</h1>
            <p>House: {house} <button onClick={handleBuyAHouse}>By A House</button></p>
            
            <section style={{display:'flex'}}>
            <Father house={house} ornament={ornament}></Father>
            <Uncle house={house}></Uncle>
            <Aunty house={house}></Aunty>
        </section>
        </div>
       </RingContext.Provider>
    );
};

export default Grandpa;