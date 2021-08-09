import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, total }] = useStateValue();

  return (
    <div>
      {basket.map((e) => (
        <CheckoutProduct
          key={e.id}
          id={e.id}
          title={e.title}
          amount={e.amount}
          price={e.price}
        />
      ))}
      <br />
      <br />
      <br />
      <h3>{total}</h3>
    </div>
  );
}

export default Checkout;
