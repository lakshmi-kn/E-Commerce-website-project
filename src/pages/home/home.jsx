import React from "react";
import "../home/home.css";
import { CATEGORIES } from "../../category";
import { Link } from "react-router-dom";

import Footer from "../../components/footer";

export const Home = () => {
    return (
        <div className="home">
            <div className="shopname">
                <h1>ProductWorld</h1>
            </div>

            <div className="categories">
                {CATEGORIES.map((category) => (
                    <div className="category">
                        <Link to={`/shop/${category.id}`}>{category.name}</Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
};