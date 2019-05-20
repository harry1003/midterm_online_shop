import React from 'react';
import './ProductItemPur.css'

export default ({ add_one, delete_one, num, data }) => {
    let classname = "Button3 " + data.name;

    let img = "";
    if(data.url !== "")
        img = data.url;
    else
        img = data.img;

    return (
        <div className="ProductItemPurchase">
            <img className="Img" src={img}/>
            <div className="Text-wrapper">
                <h1>{data.name}</h1>
                <div className="Text-wrapper2">
                    <h2 className="Quantity">Quantity:  {num} </h2> 
                    <h2 className="Price">$ {(num * data.price).toFixed(2)}</h2>
                </div>
            </div>
            <div className="Text-wrapper3">
                <h2 className={classname} onClick={add_one}> + </h2>
                <h2 className={classname} id="minus" onClick={delete_one}> - </h2>
            </div>
        </div>
    );
}