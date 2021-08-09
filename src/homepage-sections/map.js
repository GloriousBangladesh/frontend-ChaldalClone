import React from "react";

function Map() {
  return (
    <section className="row bg-dark mx-1">
    <div className=" col-md-7 container mapImage">
      <img className="img-fluid" src="img/map.png" alt=""/>
    </div>
    <div className="companyLog col-md-5 text-center mt-5">
      <h1 style={{fontSize: "xx-large"}} className="font-weight-bold text-warning">Dhaka</h1>
      <h1 style={{fontSize: "xx-large"}}>Total Order Placed</h1>
      <h1 style={{fontSize: "xx-large"}} className="font-weight-bold text-warning">75213696</h1>
      <h1 style={{fontSize: "xx-large"}}>Total Saving</h1>
      <h1 style={{fontSize: "xx-large"}} className="font-weight-bold text-warning">৳218,744,100</h1>
      <h1 style={{fontSize: "xx-large"}}>Time Saved</h1>
      <h1 style={{fontSize: "xx-large"}} className="font-weight-bold text-warning">744,100 hrs</h1>
    </div>
  </section>
  );
}

export default Map;