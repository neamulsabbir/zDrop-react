import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './CardCom.css'

const CardCom = (props) => {
    const {image,slug} = props.cardItem;

    /* const navigate = useNavigate()
    const showCardProduct = () => {
        navigate ('/category/' + slug);
    } */

    return (
        <div className='cardComp-container'>
            <Link to={'/category/' + slug}>
                <img src={image} alt=''></img>
            </Link>
            {/* onClick ={showCardProduct} */}
        </div>
    );
};

export default CardCom;