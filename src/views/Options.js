import React, { useState, useEffect, lazy } from 'react';
import '../App.css';
// import { ProductsItemComponent } from "../components/CompCard";
import { Products } from "../api/Products";
import { Link } from "react-router-dom";

const ProductsItemComponent = lazy(() => import("../components/Card"));

export function OptionsPage() {

    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {

        document.getElementById("color").style.color = "unset";
        document.getElementById("color").style.fontWeight = "normal";
        document.getElementById("options").style.color = "turquoise";
        document.getElementById("options").style.fontWeight = "bold";
        document.getElementById("resume").style.color = "unset";
        document.getElementById("resume").style.fontWeight = "normal";
        
        Products.getProducts().then(result => {
            setObjProducts(result.itemsOptions);
        }, function (error) {
            setObjProducts(error);
        })
    }, []);

    return (
        <>
            <div className="App">
            <Link className="btn btn-secondary btn1" to="/color"> back </Link> <Link className="btn btn-secondary btn1" to="/prod"> next </Link>
                <main className="App-header">
                    <div className="cardContainer">
                        {objProducts.map(list => (
                            <ProductsItemComponent
                                id={list.id}
                                image={list.image}
                                name={list.name}
                                price={list.price}
                                route='itemsOptions'
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}