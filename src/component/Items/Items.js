import React from 'react';
import CardCom from '../CardCom/CardCom';
import Carousel from "../Carousel/Carousel";
import './Items.css'

const Items = ({product}) => {
    return (
        <div>
            <div className='items-container'>
            <img className='items-img' src={product.sideImg} alt=''></img>
            <div>
                <p>{product.offers}</p>
                <p>{product.name}</p>
                <p>{product.shopMore}</p>
                <p>{product.shopUp}</p>
                <p>{product.name}</p>
                <div className='cardComp-container'>
                {
                    product?.items?.map(cardItem => <CardCom cardItem={cardItem}></CardCom>)
                }
                </div>
            </div>
            </div>
            <div className='items-carousel-container'>
                    {
                        product?.carouseel?.items?.map(carousel => <Carousel carousel={carousel}></Carousel>)
                    }
             </div>
        </div>
    );
};

export default Items;