import React from 'react';

const Oform = (props) => {
    return (
        <tr>
          <th scope="row">{props.data.id}</th>
          <td> {props.data.name}</td>
          <td>{props.data.description}</td>
          <td>{props.data.quantity}</td>
          <td>{props.data.price}</td>
        </tr>
  );
};


export default Oform;