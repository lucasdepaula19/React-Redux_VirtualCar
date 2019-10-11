import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import '../App.css';

const CartCounterComponent = props => (
  <>
    <Link class="colorWhite" to="/prod"> View cart ({props.total})</Link>
  </>
);

const mapStateToProps = ( { cart } ) => ( { total: cart.products.length } );

export const CartCounter = connect(mapStateToProps)(CartCounterComponent);
