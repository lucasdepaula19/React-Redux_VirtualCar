import React, { useState, useEffect, lazy } from 'react';
import '../App.css';
import { Products } from "../api/Products";
import { Link } from "react-router-dom";

const Card = lazy(() => import("../components/Card"));

export function ColorPage() {

    const [objProducts, setObjProducts] = useState([]);

    useEffect(() => {
        
        document.getElementById("version").style.color = "unset";
        document.getElementById("version").style.fontWeight = "normal";
        document.getElementById("color").style.color = "turquoise";
        document.getElementById("color").style.fontWeight = "bold";
        document.getElementById("options").style.color = "unset";
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
                <main>
                <h4>Select a color</h4>
                <div id="topico"></div>
                    <div className="cardContainer">
                        {objProducts.map((list, index) => (
                            <Card
                                id={list.id}
                                image={list.image}
                                name={list.name}
                                price={list.price}
                                route='itemsColor'
                                //index={index}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}