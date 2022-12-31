import React from 'react';
import './Trends.css'

const Trends = (props) => {
    const {offers,name,slogan,more,shopUpto,jeans,jacket,shoes,bags,accesories,watches,img,name1,img1,name2,img2,name3,img3,name4,img4,name5,img5,name6,img6,name7,img7,price,price2,price3,price4,price5,price6,price7} = props.trendsDetails
    return (
        <div>
            <div className='trends-container'>
                <div>
                    <img className='trends-container-image' src={img} alt=''></img>
                </div>
                <div className='trends-details'>
                    <h2>{offers}</h2>
                    <h1>{name}</h1>
                    <p>{slogan}</p>
                    <p className='shop-more'>{more}</p>
                    <p className='shop-up'>{shopUpto}</p>
    
                    <div className='trends-side-img'>
                        
                        <img src={jeans} alt=''></img>
                            <img src={jacket} alt=''></img>
                            <img src={shoes} alt=''></img>
                            <img src={bags} alt=''></img>
                            <img src={accesories} alt=''></img>
                            <img src={watches} alt=''></img>
                    </div>
                </div>
                
                
            </div>

            <div className='mensfashion-container'>
                <h4>MENS FASHION</h4>
                <div className='mens-fashion'>
                    <div>
                        <img src={img1} alt=''></img>
                        <p><small>{name1}</small></p>
                        <h3>BDT {price}</h3>
                    </div>
                    <div>
                        <img src={img2} alt=''></img>
                        <p><small>{name2}</small></p>
                        <h3>BDT {price2}</h3>
                    </div>
                    <div>
                        <img src={img3} alt=''></img>
                        <p><small>{name3}</small></p>
                        <h3>BDT {price3}</h3>
                    </div>
                    <div>
                        <img src={img4} alt=''></img>
                        <p><small>{name4}</small></p>
                        <h3>BDT {price4}</h3>
                    </div>
                    <div>
                        <img src={img5} alt=''></img>
                        <p><small>{name5}</small></p>
                        <h3>BDT {price5}</h3>
                    </div>
                    <div>
                        <img src={img6} alt=''></img>
                        <p><small>{name6}</small></p>
                        <h3>BDT {price6}</h3>
                    </div>
                    <div>
                        <img src={img7} alt=''></img>
                        <p><small>{name7}</small></p>
                        <h3>BDT {price7}</h3>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Trends;