import React, { useState, useEffect, lazy } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { Link } from "react-router-dom";

const Card = lazy(() => import("../components/Card"));

export function InitialPage() {

    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {

    document.getElementById("model").style.color = "turquoise";
    document.getElementById("model").style.fontWeight = "bold";
    document.getElementById("version").style.color = "unset";
    document.getElementById("version").style.fontWeight = "normal";

        Products.getProducts().then(result => {
            setObjProducts(result.items);
        }, function (error) {
            setObjProducts(error);
        })
    }, []);

    return (
        <>
            <div className="App">
            <Link className="btn btn-secondary btn1" to="/"> back </Link> <Link className="btn btn-secondary btn1" to="/version"> next </Link>
                <main className="App-header">
                <h4>select a car</h4>
                    <div className="cardContainer">
                        {objProducts.map(list => (
                            <Card
                                id={list.id}
                                image={list.image}
                                name={list.name}
                                price={list.price}
                                route='items'
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}