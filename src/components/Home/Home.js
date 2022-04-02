import React, { useState } from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import TShirt from '../Tshirt/TShirt';
import "./Home.css";

const Home = () => {
    const [tShirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = item => {
        const exists = cart.find(tShirt => tShirt._id === item._id)
        if (!exists) {
            setCart([...cart, item]);
        } else {
            alert("Item Already Added");
        }
    }

    const handleRemoveItem = id => {
        const restItems = cart.filter(tShirt => tShirt._id !== id);
        setCart(restItems);
    }
    return (
        <div className='homeContainer'>
            <div className="tshirtContainer">
                {
                    tShirts.map(tShirt => <TShirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart} handleRemoveItem={handleRemoveItem} />
            </div>
        </div>
    );
};

export default Home;