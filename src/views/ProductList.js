import React, { useState, useEffect, lazy } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { Link } from "react-router-dom";

const ProductsItemComponent = lazy(() => import("../components/CompCard"));

export function InitialPage() {

    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {

    document.getElementById("model").style.color = "turquoise";
    document.getElementById("model").style.fontWeight = "bold";
    document.getElementById("version").style.color = "white";
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
                    <div className="cardContainer">
                        {objProducts.map(list => (
                            <ProductsItemComponent
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