import React from "react";
import './Carousel.css'

const Carousel = ({ carousel }) => {
    // console.log(carousel)
  return (
    <div className="carousel-details">
        <img src={carousel?.image} alt=""></img>
        <p className="carousel-pd-name">{carousel?.name.length > 20 ? carousel?.name.slice(0,40) + '...' : carousel?.name}</p>
        <p className="carousel-bdt">BDT {carousel?.price}</p>
    </div>
  );
};

export default Carousel;
