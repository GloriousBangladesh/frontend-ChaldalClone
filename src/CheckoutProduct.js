import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, amount, price, image, measure }) {
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

  const IMAGE_HOST = "https://chdl-clone-gb-project.herokuapp.com/"

  return (
    <div
      id={id}
      key={id}
      style={{ color: "#615e58" }}
      className="row justify-content-around border-bottom"
    >
      <div className="col-2 my-3">
        <div onClick={increment} className="cartItemButton" id="increaseButton">
          <i className="fa fa-angle-up" aria-hidden="true"></i>
        </div>
        <div id="cartItemQuantity">{amount}</div>
        <div onClick={decrement} className="cartItemButton" id="decreaseButton">
          <i className="fa fa-angle-down" aria-hidden="true"></i>
        </div>
      </div>
      <div className="col-2 my-3 px-1 py-3">
        <img id={id} className="img-fluid" src={image} alt="" />
      </div>
      <div className="col-3 my-4 px-0">
        <div id="cartItemName">{title}</div>
        <div>
          <small id="pricePerMeasure">
            ৳ {price} / {measure}
          </small>
        </div>
      </div>
      <div className="col-4 my-2 px-0 py-3">
        <div className="row mx-1">
          <div className="col-8 my-3 px-0">
            <div style={{ color: "red" }} id="totalPrice">
              ৳ {price * amount}
            </div>
          </div>
          <div onClick={remove} className="cartItemButton col-3 my-3 px-0">
            &times;
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
