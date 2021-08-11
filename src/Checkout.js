import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import axios from "axios";

function Checkout() {
  const [{ basket, total }] = useStateValue();

  function openNav() {
    document.getElementById("mycartSidebar").style.width = "320px";
  }

  function closeNav() {
      document.getElementById("mycartSidebar").style.width = "0";
  }

  let PRODUCT_SEARCH_URL = "http://localhost:8000/apis/product?id=";
  let IMG_SERVER_URL = "http://localhost:8000/"

  // return (
  //   <div>
  //     {basket.map((e) => (
  //       <CheckoutProduct
  //         key={e.id}
  //         id={e.id}
  //         title={e.title}
  //         amount={e.amount}
  //         price={e.price}
  //       />
  //     ))}
  //     <br />
  //     <br />
  //     <br />
  //     <h3>{total}</h3>
  //   </div>
  // );

  let cartMiddle = (
    <div style={{width: "100%",textAlign: "center"}} className="justify-content-center my-5">
      <img style={{width: "50%"}} className="img-fluid" src="/img/emptyShoppingBag.png" alt=""/><br/>
      <div className="mt-3 text-center mx-5" style={{fontSize:"17px",color: "#aaa"}}>Your shopping bag is empty. Start shopping</div>
    </div>
  );

  let cartBottom = (
    <div style={{position: "absolute",bottom: '0',width: "100%"}} className="border-top p-5 justify-content-center">
      <div style={{color: "#aaa",position: "absolute",top: "0",left: "0",right:"0"}} className="mt-3 text-center font-weight-bold">
        Phone : 0188-1234567
      </div>
    </div>
  );
  
  let totalItemsInCart = "0 ITEM";

  if(basket.length > 0){
    openNav();
    console.log(basket);
    totalItemsInCart = basket.length + (basket.length == 0 ? " ITEM" : " ITEMS");
    
    cartMiddle = (
      <div id="cartItemList" style={{width: "100%",textAlign: "center"}} className="justify-content-center py-1">
        {basket.map((e) => (
          
          <div id={e.id} key={e.id} style={{color: "#615e58"}} className="row justify-content-around border-bottom">
            <div className="col-2 my-3">
              <div className="cartItemButton" id="increaseButton">
                <i className="fa fa-angle-up" aria-hidden="true"></i>
              </div>
              <div id="cartItemQuantity">
                {e.amount}
              </div>
              <div className="cartItemButton" id="decreaseButton">
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-2 my-3 px-1">
              <img id={e.id} className="img-fluid" src={e.image} alt=""/>
            </div>
            <div className="col-3 my-4 px-0">
              <div id="cartItemName">
                {e.title}
              </div>
              <div>
                <small id="pricePerMeasure">৳ {e.price} / {e.measure}</small>
              </div>
            </div>
            <div className="col-4 my-2 px-0 py-3">
              <div className="row mx-1">
                <div className="col-8 my-3 px-0">
                  <div style={{color: "red"}} id="totalPrice">
                    ৳ {e.price * e.amount}
                  </div>
                </div>
                <div className="cartItemButton col-3 my-3 px-0">
                  &times;
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    cartBottom = (
      <div style={{position: "absolute",bottom: '1',width: "100%", cursor: "pointer"}} className="border-top p-1 justify-content-center">
            <div style={{color: "#fff",position: "absolute",top: '0',left: "0",right:"0"}} className="p-5">
              <div className="row justify-content-center">
                <div style={{backgroundColor: "#ff8182", borderRadius: "16px 0 0 16px"}} className="col-7 py-3">
                  Place Order
                </div>
                <div style={{backgroundColor: "#e04f54",borderRadius: "0 16px 16px 0"}} className="col-4 py-3">
                  ৳ {total}
                </div>
              </div>
            </div>

        </div>
    );
  }

  return(
    <div id="mycartSidebar" className="cartSidebar">
      <div className="mt-1">
        <div style={{backgroundColor: "#E4E0E1"}} className="row py-2 justify-content-center">
          <div className="col-2 py-3"><i className="twa twa-lg twa-shopping-bags"></i></div><div className="col-7 py-3">{totalItemsInCart}</div><div onClick={closeNav} className="col-2 closebtn">&times;</div>
        </div>

        <div style={{color: "white",backgroundColor: "#97CC6E"}} className="py-1 justify-content-around d-flex">
          <div className="ms-1">Promotional shipping fee</div><div style={{width: "20%"}} className="d-flex justify-content-around"><div>৳ 19</div><div className="ms-5"><i className="fa fa-info-circle" aria-hidden="true"></i></div></div>
        </div>

        { cartMiddle }
        
        { cartBottom }
        
      </div>
    </div>
  );
}

export default Checkout;
