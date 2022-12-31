import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts';
import './Caregory.css'

const Category = () => {
    const [productszz] = useProducts()
    return (
        <div>
            <div className='category-container'>
                <p>Add Element Here</p>
                <p>Add Element Here</p>
                <input type='text'></input>
            </div>
            <div className='category-details'>
                <p className='category-product-info'>Some Category Here</p>
                <div className='category-product'>
                    {
                        productszz?.map(categoryDetail => console.log(categoryDetail))
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;