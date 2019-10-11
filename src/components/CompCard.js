import React, { useState, useEffect } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { addToCart } from "../actions";
import { connect } from 'react-redux';

export function ProductsItemComponent(prod) {

    const [obj, setObj] = useState({});
    const [isSelect, setIsSelect] = useState(false);

    useEffect(() => {
        Products.getProductById(prod.id, prod.route).then(result => {
            setObj(result);
        }, function (error) {
            setObj(error);
        })
    });

    function handleClick() {
        let active = !isSelect;
        setIsSelect(active);
    }

    return (
        <>
            <div className={`card cardConfig ${isSelect ? 'backColor' : ''}`} onClick={() => { prod.addToCart(obj); handleClick() }}>
                <img src={require(`../assets/images/${prod.image}`)} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">Price: {prod.price}</p>
                </div>
            </div>
        </>
    )
}

export default connect(
    undefined,
    { addToCart }
)(ProductsItemComponent)