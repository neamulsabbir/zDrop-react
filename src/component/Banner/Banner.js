import React from 'react';
import './Banner.css'

const Banner = ({banner}) => {
    return (
        <div className='banner-img'>
            <img src={banner.top_banner} alt=''></img>
        </div>
    );
};

export default Banner;