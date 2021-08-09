import React, { useState } from "react";

function HeaderBanner() {
  return (
    <header className="mt-4">
        <div className="landingBanner" style={{background:"url(https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2253/Default/stores/chaldal/components/landingPage2/LandingPage/images/landingBannerTop.png) no-repeat center",backgroundSize:"cover",height:"325px",paddingTop:"100px"}}>
        <h1 className="header-title text-center font-weight-bold">Groceries delivered in 1 hour</h1>
    
        <div style={{maxWidth: "50vw"}} className="container-sm input-group flex-nowrap">
            <input type="text" className="form-control" placeholder="Search for products (e.g. eggs, milk, potato)" aria-label="Username" aria-describedby="addon-wrapping" />
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2"><i className="fa fa-search" style={{fontSize:"24px"}}></i></span>
            </div>
        </div>
    
        </div>
    </header>
  );

}

export default HeaderBanner;