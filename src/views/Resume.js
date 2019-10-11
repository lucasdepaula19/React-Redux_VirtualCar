import React, { lazy, useEffect, Suspense } from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../actions";
import { LoadingProduct } from "../components/LoadingProduct";
import { Link } from "react-router-dom";

const ProductCartItem = lazy(() => import("../components/ProductCartItem"));

const Resume = props => (

  useEffect(() => {
    document.getElementById("resume").style.color = "turquoise";
    document.getElementById("resume").style.fontWeight = "bold";
    document.getElementById("options").style.color = "unset";
    document.getElementById("options").style.fontWeight = "normal";
  }),

  <div className="App">
    <Link className="btn btn-secondary btn1" to="/options"> back </Link> <Link className="btn btn-secondary btn1" to="/prod"> Buy Now </Link>
    <main className="App-header">
      <div class="cardContainer">
        <Suspense fallback={<LoadingProduct />}>
          {props.products.map(product => (
            <ProductCartItem key={product.id} product={product} onRemove={props.removeFromCart} />
          ))}
        </Suspense>
      </div>
      <p>
        <b> total:</b> R$
      {props.products
          .reduce((acc, current) => acc + current.price, 0)
          .toFixed(2)}
      </p>
    </main>
  </div>


);

const mapStateToProps = ({ resume }) => {
  return { products: resume.products };
};

export default connect(
  mapStateToProps,
  { removeFromCart }
)(Resume);