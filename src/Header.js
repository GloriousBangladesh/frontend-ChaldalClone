import React, { useState } from "react";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

function Header(props) {
  const [{ basket, city }, dispatch] = useStateValue();
  
  const sidebarToggle = () => {
    const sidebarBtn = document.getElementById("sidebarCollapse");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");  
    sidebarBtn.classList.toggle("active");  
  }

  return (

      <nav
        style={{margin: "-20px", padding: "0",backgroundColor: "#fdd670"}}
        className="d-flex navzindex"
      >
        <div
          style={{width: "100%"}}
          className="row justify-content-around my-auto navzindex"
        >
          <div className="col-2">
            <a className="navbar-brand" href="#">
              <button type="button" onClick={sidebarToggle} id="sidebarCollapse" className="navbar-btn">
                <span></span>
                <span></span>
                <span></span>
              </button>
              <img
                id="header-logo"
                className="egg_set img-fluid"
                style={{width: "70%"}}
                src="img/chaldal-logo-small.png"
                alt=""
              />
            </a>
          </div>

          <div className="col-5 justify-content-center my-auto">
            <div className="input-group mb-3 my-auto navzindex">
              <input
                type="text"
                className="form-control border-right-0"
                placeholder="Search for products (e.g. eggs, milk, potato)"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span
                  className="input-group-text border-left-0"
                  style={{backgroundColor: "white"}}
                  id="basic-addon2"
                >
                  <span className="fa fa-search form-control-feedback"></span>
                </span>
              </div>
            </div>
          </div>
          <div
            id="header-buttons"
            style={{height: "100%"}}
            className="col-5 justify-content-center justify-content-sm-end my-auto"
          >
            <i
              id="three-dot-button"
              className="fa fa-ellipsis-v"
              aria-hidden="true"
            ></i>
            <div style={{height: "100%"}} className="row justify-content-around">
              <div
                id="location-button"
                style={{padding: "20px 0", height: "100%"}}
                className="col-md-3 text-center header-button border-left border-right"
              >
                <i className="fa fa-map-marker" aria-hidden="true"></i> Dhaka{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </div>
              <div
                id="help-button"
                style={{padding: "20px 0", height: "100%"}}
                className="col-md-4 text-center header-button border-right"
              >
                <i className="fa fa-question-circle" aria-hidden="true"></i>{" "}
                Help and More
              </div>
              <div
                id="language-button"
                style={{padding: "20px 0", height: "100%"}}
                className="col-md-2 text-center header-button border-right"
              >
                <span style={{color: "red"}}>EN</span> | বাং
              </div>
              <div
                id="signin-button"
                className="col-md-3 text-center border-right navzindex"
                onClick={props.loginFormToggle}
              >
                Sign in
              </div>
            </div>
          </div>
        </div>
      </nav>

  );
}


export default Header;
