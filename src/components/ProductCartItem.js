import React from 'react';

export default ({ product, onRemove }) => (

  <tr key={product.id}>
    <td>
      <img id="imgResume"
        src={require(`../assets/images/${product.image}`)}
        alt=""
      />
    </td>
    <td>
      <h6>{product.name}</h6>
    </td>
    <td>
      -----------------------------------------------------------------------------------------------
      </td>
    <td>
      <p>R$ {product.price},00</p>
    </td>
    <td>
      <button onClick={() => onRemove(product)}>Remove</button>
    </td>
  </tr>
);
