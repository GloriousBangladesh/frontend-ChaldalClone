import React, { useState } from "react";


function LoveChaldal() {
  return (
    <section className="mt-5 pb-5 mx-3">
        <h2 className="title text-center font-weight-bold">Why People
        <svg width="50px" height="50px"
            style={{fill:"#ff0000",stroke:"#ff0000",display:"inline-block",verticalAlign:"middle"}} version="1.1"
            viewBox="0 0 100 100">
            <path
            d="m83.332 27.082c-2.293-4.168-16.668-18.125-33.332 2.082-17.5-20.207-31.043-6.25-33.332-2.082-4.168 7.707-1.668 19.375 4.168 25l29.168 29.168 29.168-29.168c5.8281-5.625 8.3281-17.289 4.1602-25z">
            </path>
        </svg>
        Chaldal</h2>

        <div className="mt-4 row justify-content-center">
            <div style={{background: "#ffffff url('/img/service1.jpg') no-repeat right top", backgroundSize: "cover"}}
            className="tile border text-center rounded col-md-4">
            <img style={{background: "#ffffff url('/img/service1.jpg') no-repeat right top", backgroundSize: "cover"}}
                className="img-fluid" src="/img/service1.jpg" alt=""/>
            <div style={{borderWidth:"3px !important"}} className="centered pt-4 border-bottom border-warning">
                <div className="tile-text-title">
                Convenient & Quick
                </div>
                <div className="m-2 tile-inner-title">
                No waiting in traffic, no haggling, no worries carrying groceries, they're delivered right at your
                door.
                </div>
            </div>
            </div>
            <div style={{background: "#ffffff url('img/service2.jpg') no-repeat right top", backgroundSize: "cover"}}
            className="tile border text-center rounded col-md-4">
            <img style={{background: "#ffffff url('img/service2.jpg') no-repeat right top", backgroundSize: "cover"}}
                className="img-fluid" src="img/service2.jpg" alt=""/>
            <div style={{borderWidth:"3px !important"}} className="centered pt-4 border-bottom border-success">
                <div className="tile-text-title">
                Freshly Picked
                </div>
                <div className="m-2 tile-inner-title">
                Our fresh produce is sourced every morning, you get the best from us.
                </div>
            </div>
            </div>
            <div style={{background: "#ffffff url('img/service3.jpg') no-repeat right top", backgroundSize: "cover"}}
            className="tile border text-center rounded col-md-4">
            <img style={{background: "#ffffff url('img/service3.jpg') no-repeat right top", backgroundSize: "cover"}}
                className="img-fluid" src="img/service3.jpg" alt=""/>
            <div style={{borderWidth:"3px !important"}} className="centered pt-4 border-bottom border-danger">
                <div className="tile-text-title">
                    A wide range of Products
                </div>
                <div className="m-2 tile-inner-title">
                    With 4000+ Products to choose from, forget scouring those aisles for hours.
                </div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default LoveChaldal;