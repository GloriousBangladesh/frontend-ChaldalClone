import React, { useEffect } from "react";

function MobileNavbar(props) {
    return (
        <div className="headerCollaspedButtonsBox" style={{display: "block", opacity: "0"}}>
            <div id="headerCollaspedButtonsInnerDiv">
            <div className="inner-box justify-content-center">
                <span onClick={props.mobileHeaderToggle} style={{float: "right"}} className="closeIcon"><i className="fas fa-times"></i></span>
                
                <div className="headerCollaspedButton">
                <button className="btn hcb-btn" type="button">
                <span><i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp; Dhaka  &nbsp; <i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </button>
                </div>

                <div className="headerCollaspedButton">
                <button className="btn hcb-btn" type="button">
                <span><i className="fas fa-question-circle" aria-hidden="true"></i>  &nbsp; Help & More</span>
                </button>
                </div>

                <div className="headerCollaspedButton">
                <button className="btn hcb-btn" type="button">
                <span><span style={{color: "red"}}>EN</span> | বাং</span>
                </button>
                </div>

                <div className="headerCollaspedButton">
                <button className="btn hcb-btn" type="button">
                <span><i className="fa fa-shopping-cart" aria-hidden="true"></i>  &nbsp; Your Orders</span>
                </button>
                </div>

                <div className="headerCollaspedButton">
                <button style={{backgroundColor: "#ff0000", color:"white"}} className="btn hcb-btn font-weight-bold" type="button">
                <span>Sign in</span>
                </button>
                </div>

                <div className="headerCollaspedButton">
                <button style={{backgroundColor: "#ff0000", color:"white"}} className="btn hcb-btn font-weight-bold" type="button">
                <span>sabit | Sign out</span>
                </button>
                </div>

            </div>
            </div>
        </div>
    );
}

export default MobileNavbar;