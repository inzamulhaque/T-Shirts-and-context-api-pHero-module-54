import React from 'react';
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h2>Selected Item(s): {cart.length}</h2>
            <p><small>{cart.length === 0 ? "Please Add something" : "Thanks for Adding"}</small></p>
            {cart.map(tShirt => <p key={tShirt._id}>
                {tShirt.name} {" "}
                <button onClick={() => handleRemoveItem(tShirt._id)}>X</button>
            </p>)}
        </div>
    );
};

export default Cart;