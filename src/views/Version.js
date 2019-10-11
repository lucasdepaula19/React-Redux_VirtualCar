import React, { useState, useEffect, lazy } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { Link } from "react-router-dom";

const ProductsItemComponent = lazy(() => import("../components/CompCard"));

export function VersionPage() {

    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {

        document.getElementById("model").style.color = "white";
        document.getElementById("model").style.fontWeight = "normal";
        document.getElementById("version").style.color = "turquoise";
        document.getElementById("version").style.fontWeight = "bold";
        document.getElementById("color").style.color = "white";
        document.getElementById("color").style.fontWeight = "normal";

        Products.getProducts().then(result => {
            setObjProducts(result.itemsVersion);
        }, function (error) {
            setObjProducts(error);
        })
    }, []);

    return (
        <>
            <div className="App">
            <Link className="btn btn-secondary btn1" to="/"> back </Link> <Link className="btn btn-secondary btn1" to="/color"> next </Link>
                <main className="App-header">
                    <div className="cardContainer">
                        {objProducts.map(list => (
                            <ProductsItemComponent
                                id={list.id}
                                image={list.image}
                                name={list.name}
                                price={list.price}
                                description={list.description}
                                route='itemsVersion'
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}