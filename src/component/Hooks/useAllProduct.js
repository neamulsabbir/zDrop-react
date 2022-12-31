import React, { useEffect, useState } from 'react';

const useAllProduct = () => {
    const [allProducts,setAllProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then (data => setAllProducts(data))
    },[])
    return[allProducts,setAllProducts]
};

export default useAllProduct;