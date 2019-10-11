import React, { useState, useEffect } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { addToCart } from "../actions";
import { connect } from 'react-redux';

export function ProductsItemComponent(prod) {

    const [obj, setObj] = useState({});

    useEffect(() => {
        Products.getProductById(prod.id, prod.route).then(result => {
            setObj(result);
        }, function (error) {
            setObj(error);
        })
    });

    return (
        <>
            <div className="card cardConfig" id="cardId">
                <img src={require(`../assets/images/${prod.image}`)} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">Price: {prod.price}</p>
                    <button className="btn btn-primary" onClick={() => prod.addToCart(obj) }>Select</button>
                    {/* <input type="radio" id="tes011" name="ddidi" value="erere"/> */}
                </div>
            </div>
        </>
    )
}

export default connect(
    undefined,
    { addToCart }
)(ProductsItemComponent)