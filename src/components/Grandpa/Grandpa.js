import React, { createContext, useState } from 'react';
import "./Grandpa.css";
import Father from './Father';
import Uncle from './Uncle';
import Aunty from './Aunty';

const MyHouseContext = createContext();

const Grandpa = () => {
    const [house, setHouse] = useState(1);

    const handleBuyAHouse = () => {
        setHouse(house + 1);
    }
    return (
        <>
            <MyHouseContext.Provider value={house}>
                <h1>Grand Pa</h1>
                <p><small>House: {house}</small></p>
                <button onClick={handleBuyAHouse}>Buy A House</button>
                <div className='grandPa'>
                    <Father />
                    <Uncle />
                    <Aunty />
                </div>
            </MyHouseContext.Provider>
        </>
    );
};

export default Grandpa;
export { MyHouseContext };