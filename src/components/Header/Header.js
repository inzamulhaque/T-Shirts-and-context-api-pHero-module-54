import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to T-Shirt Mania!</h1>
            <nav>
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/"}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/ordersreview"}>Orders Review</NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : ""} to={"/grandpa"}>Grand Pa</NavLink>
            </nav>
        </div>
    );
};

export default Header;