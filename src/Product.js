import React from "react";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, measure, description }) {
  const [{ hash, basket }, dispatch] = useStateValue();

  const addProduct = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, measure, description },
      price: price,
    });
    // console.log(basket);
  };

  const decrement = () => {
    if(hash[id] == 0){
      return
    }
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
      pr: price,
    });
    // console.log(basket);
  };

  const increment = () => {
    dispatch({
      type: "ADD_ONE",
      id: id,
      pr: price,
    });
    //console.log(basket);
  };

  let a = <div className="btn addbg col-sm-7" onClick={addProduct}>Add to bag</div>

  if (hash[id]) {
    if (hash[id] !== 0) {
      a = <div className="btn addbg col-sm-7" onClick={addProduct}>{hash[id]} in Bag</div>
    }
  }



  //console.log(basket);
  //console.log(basket);

  return (
    <div className="col-md-3 justify-content-center m-3">
      <img className="imgs img-thumbnail" src={image}/>
      <div className="product__body">
          <p>{title}</p>
          <h6 className="weight">{measure}</h6>
          <h5> <strong>৳ {price}</strong> </h5>
          <div className="row justify-content-center">
            <div className="btn col-sm-2 icondet" onClick={decrement}><i className="fas fa-minus"></i></div>
            {a}
            <div className="btn col-sm-2 icondet" onClick={addProduct}><i className="fas fa-plus" aria-hidden="true"></i></div>
          </div>
          
      </div>
  </div>

  );
}

export default Product;
