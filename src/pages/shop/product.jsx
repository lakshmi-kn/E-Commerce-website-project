import React, { useContext } from "react";
import { ShopContext } from '../../context/shop-context';


export const Product = (props) => {
    const { id, productName, price, productImage, category } = props.data;

    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <div className="product">
            <div className="productImage">
                <img src={productImage} alt="product" />
            </div>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p>Rs {price}</p>
            </div>
            <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
        </div>
    );
};