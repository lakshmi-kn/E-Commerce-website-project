import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./header.css";

export const Header = () => {
    return (
        <div className="head">
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    )
}