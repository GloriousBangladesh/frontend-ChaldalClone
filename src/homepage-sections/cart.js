import React from "react";

function Cart() {

    function openNav() {
        document.getElementById("mycartSidebar").style.width = "320px";
    }

    function closeNav() {
        document.getElementById("mycartSidebar").style.width = "0";
    }
    
    

    return(
        <div id="mycartSidebar" className="cartSidebar">
      <div className="mt-1">
        <div style={{backgroundColor: "#E4E0E1"}} className="row py-2 justify-content-center">
          <div className="col-2 py-3"><i className="twa twa-lg twa-shopping-bags"></i></div><div className="col-7 py-3">0 ITEM</div><div onClick={openNav} className="col-2 closebtn">&times;</div>
        </div>

        <div style={{color: "white",backgroundColor: "#97CC6E"}} className="py-1 justify-content-around d-flex">
          <div className="ms-1">Promotional shipping fee</div><div style={{width: "20%"}} className="d-flex justify-content-around"><div>৳ 19</div><div className="ms-5"><i className="fa fa-info-circle" aria-hidden="true"></i></div></div>
        </div>

        <div style={{width: "100%",textAlign: "center"}} className="justify-content-center my-5">
          <img style={{width: "50%"}} className="img-fluid" src="/img/emptyShoppingBag.png" alt=""/><br/>
          <div className="mt-3 text-center mx-5" style={{fontSize:"17px",color: "#aaa"}}>Your shopping bag is empty. Start shopping</div>
        </div>
        
        <div style={{position: "absolute",bottom: '0',width: "100%"}} className="border-top p-5 justify-content-center">
          <div style={{color: "#aaa",position: "absolute",top: "0",left: "0",right:"0"}} className="mt-3 text-center font-weight-bold">
            Phone : 0188-1234567
          </div>
        </div>
      </div>
    </div>
    );

    // openNav();
}

export default Cart;