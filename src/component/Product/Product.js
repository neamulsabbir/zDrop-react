import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props)
    const {img,name,price} = props.allProduct
    return (
        <div className='product-container'>
                <img src={img} alt=''></img>
                <p className='product-name'>{name}</p>
                <dv className='product-btn'>
                    <p className='product-price'>Price: ${price}</p>
                    <button>+</button>
                </dv>
        </div>
    );
};

export default Product;