import React, { useContext } from 'react';
import { MyHouseContext } from './Grandpa';

const Special = () => {
    const house = useContext(MyHouseContext);
    return (
        <div>
            <h5>Special</h5>
            <p><small>House: {house}</small></p>
        </div>
    );
};

export default Special;