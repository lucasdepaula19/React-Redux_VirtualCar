import React from 'react';

export default ({ product, onRemove }) => (
  <div class="cart" key={product.id}>
    <img
      width="100"
      src={require(`../assets/images/${product.image}`)}
      alt=""
    />
    <h4>{product.name}</h4>
    <p>{product.price}</p>

    <button onClick={() => onRemove(product)}>Remove</button>
  </div>
);
