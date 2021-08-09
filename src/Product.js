import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, description }) {
  const [{ hash }, dispatch] = useStateValue();

  const addProduct = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, description },
      price: price,
    });
  };

  let a = <button onClick={addProduct}>Buy</button>;

  if (hash[id]) {
    if (hash[id] !== 0) {
      a = <button onClick={addProduct}>{hash[id]} in basket</button>;
    }
  }

  return (
    <div>
      <br />
      <br />
      <span>{title}</span>
      <br />
      <span>{price}</span>
      <br />
      {a}
      <br />
      <br />
    </div>
  );
}

export default Product;
