import React from 'react';
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { name, picture, gender, price } = tShirt;
    return (
        <div className='tShirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p><small>{gender}</small></p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default TShirt;