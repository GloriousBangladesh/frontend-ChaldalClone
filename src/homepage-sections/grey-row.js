import React from "react";

function GreyRow() {
  return (
    <section>
        <div className="row bg-light-grey">
        <div className="col-md-3">
            <div className="d-flex deliverySystem mx-2 justify-content-center">
            <img
                src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/stores/chaldal/components/page/BrandComponent/images/1-hour.png?q=low&amp;webp=1&amp;alpha=1"/>
            <p style={{fontSize:"smaller", color: "#272626"}} className="mx-3">1 hour delivery</p>
            </div>
        </div>
        <div className="col-md-3">
            <div className="d-flex deliverySystem mx-2 justify-content-center">
            <img
                src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/stores/chaldal/components/page/BrandComponent/images/cash-on-delivery.png?q=low&amp;webp=1&amp;alpha=1"/>
            <p style={{fontSize:"smaller", color: "#272626"}}>Cash on delivery</p>
            </div>
        </div>

        <div className="col paysystem d-flex justify-content-center justify-content-md-end">
            <p style={{fontSize:"smaller", color: "#272626"}}>Pay With</p>
            <img
            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/Amex.png?q=low&amp;webp=1&amp;alpha=1"/>
            <img
            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/components/shared/NewFooter/images/bkash.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"/>
            <img
            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/components/shared/NewFooter/images/mastercard.png?q=low&amp;webp=1&amp;alpha=1"/>
            <img
            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2254/Default/components/shared/NewFooter/images/VIsa.png?q=low&amp;webp=1&amp;alpha=1"/>
        </div>
        </div>
    </section>
  )
}

export default GreyRow;