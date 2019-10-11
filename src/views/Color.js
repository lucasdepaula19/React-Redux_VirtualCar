import React, { useState, useEffect, lazy } from 'react';
import '../App.css';
// import { ProductsItemComponent } from "../components/CompCard";
import { Products } from "../api/Products";
import { Link } from "react-router-dom";

const ProductsItemComponent = lazy(() => import("../components/CompCard"));

export function ColorPage() {

    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {
        
        document.getElementById("version").style.color = "white";
        document.getElementById("version").style.fontWeight = "normal";
        document.getElementById("color").style.color = "turquoise";
        document.getElementById("color").style.fontWeight = "bold";
        document.getElementById("options").style.color = "white";
        document.getElementById("options").style.fontWeight = "normal";

        Products.getProducts().then(result => {
            setObjProducts(result.itemsColor);
        }, function (error) {
            setObjProducts(error);
        })
    }, []);

    return (
        <>
            <div className="App">
            <Link className="btn btn-secondary btn1" to="/version"> back </Link> <Link className="btn btn-secondary btn1" to="/options"> next </Link>
                <main className="App-header">
                    <div className="cardContainer">
                        {objProducts.map(list => (
                            <ProductsItemComponent
                                id={list.id}
                                image={list.image}
                                name={list.name}
                                price={list.price}
                                route='itemsColor'
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}