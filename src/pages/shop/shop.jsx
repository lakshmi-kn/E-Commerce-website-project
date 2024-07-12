import React, { useEffect, useState } from "react";
import { Product } from './product';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../../components/footer";

import { PRODUCTS } from '../../products';
import { CATEGORIES } from "../../category";


import "./shop.css";


export const Shop = () => {

    const { categoryId } = useParams();

    const [productList, setList] = useState(PRODUCTS);

    const [searchValue, setSearch] = useState('');

    useEffect(() => {
        if (searchValue) {
            setList(productList.filter(item => item.productName.toLowerCase().indexOf(searchValue) !== -1));
        }
        else {
            setList(
                categoryId ? PRODUCTS.filter(item => item.categoryId === +categoryId)
                :
                PRODUCTS
            )
        }
    }, [searchValue])


    useEffect(() => {
        if (categoryId) {
            setList(PRODUCTS.filter(item => item.categoryId === +categoryId));
        } else {
            setList(PRODUCTS);
        }
    }, [categoryId])

    //console.log(PRODUCTS.filter(item => item.categoryId === +categoryId))

    return (
        <div className="shop">
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

            <div className="search">
                <label>Search</label>
                <input type='text' className="search_field" onChange={ (event) => {setSearch(event.target.value)}} />
            </div>

            <div className="products">
                {
                    productList.length ?
                        productList.map((product) => (
                            <Product data={product} />
                        ))
                        :
                        <div>
                            No Results Found.
                        </div>
                }
            </div>
            <Footer />
        </div>
    )
};