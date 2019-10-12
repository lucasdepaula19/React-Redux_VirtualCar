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

  <div>
    <Link className="btn btn-secondary btn1" to="/options"> back </Link> <Link className="btn btn-secondary btn1" to="/prod"> Buy Now </Link>
    <main>
      <h4>Resume</h4>
      <div className="cardContainer">
        <Suspense fallback={<LoadingProduct />}>
          <table className="table" id="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th></th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {props.products.map(product => (
                <ProductCartItem key={product.id} product={product} onRemove={props.removeFromCart} />
              ))}
              <tr>
                <td>
                  <b> Total to pay:</b>
                </td>
                <td></td>
                <td></td>
                <td>
                  R$
                  {props.products
                    .reduce((acc, current) => acc + current.price, 0)
                    .toFixed(2)}
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>

        </Suspense>
      </div>
      <p>

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