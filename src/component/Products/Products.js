import React from "react";
import useAllProduct from "../Hooks/useAllProduct";
import Product from "../Product/Product";
import './Products.css'

const Products = () => {
  const [allProducts] = useAllProduct();
  return (
    <div>
      <div className="category-container">
        <p>Add Element Here</p>
        <p>Add Element Here</p>
        <input type="text"></input>
      </div>

      <div className="category-details">
        <p className="category-product-info">Some Category Here</p>
        <div className="products-container">
          {
            allProducts.map((allProduct) => (<Product allProduct={allProduct}></Product>))
          }
        </div>
      </div>
    </div>
  );
};

export default Products;
