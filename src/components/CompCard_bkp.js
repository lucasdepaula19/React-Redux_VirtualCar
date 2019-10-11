import React from "react";
import '../App.css';
import { Link } from "react-router-dom";

export const Card = (obj) => (
    <>
        <div className="card cardConfig">
            <img src={require(`../assets/images/${obj.image}`)} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{obj.name}</h5>
                <p className="card-text">Price: {obj.price}</p>
                <Link className="btn btn-primary" to={`/prod/${obj.id}`}>Select</Link>
            </div>
        </div>
    </>
)