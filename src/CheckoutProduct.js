import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, amount, price }) {
  const [{}, dispatch] = useStateValue();

  const remove = () => {
    dispatch({
      type: "DEL",
      id: id,
      pr: amount * price,
    });
  };

  const decrement = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      pr: price,
    });
  };

  const increment = () => {
    dispatch({
      type: "ADD_ONE",
      id: id,
      pr: price,
    });
  };

  return (
    <div>
      <br />
      <br />
      <span>{title}</span>
      <br />
      <span>{amount}</span>
      <br />
      <span>{price}</span>
      <br />
      <button onClick={remove}>remove</button>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <br />
      <br />
    </div>
  );
}

export default CheckoutProduct;
