import React from "react";
import { useStateValue } from "./StateProvider";
import { useHistory, useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function Header(props) {
  const rhistory = useHistory();

  const [{ basket, city, user, pros }, dispatch] = useStateValue();

  const searchLocation = (event) => {
    var str = event.target.value;
    axios
      .get("https://chdl-clone-gb-project.herokuapp.com/apis/search?q=" + str)
      .then((res) => {
        if(res.data.result != pros){
          dispatch({
            type:"SHOW",
            pros:res.data.result,
            prev:pros
          });
          rhistory.push("/search/" + str);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  
    window.onpopstate=function()
  {
    if((''+window.location.href).includes("/search")){
      window.history.back();
    }
  }
  
  

  const sidebarToggle = () => {
    const sidebarBtn = document.getElementById("sidebarCollapse");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
    sidebarBtn.classList.toggle("active");

    if(!sidebar.classList.contains("active")){
      setTimeout(function () {
        sidebar.style.position = "sticky";
      }, 200);
    }
    else{
      setTimeout(function () {
        sidebar.style.position = null;
      }, 400);
    }
  };


  let signinButton = (
    <div
      id="signin-button"
      className="col-md-3 text-center border-right"
      onClick={props.loginFormToggle}
    >
      Sign in
    </div>
  );

  if(user != null){
    signinButton = (<div
      id="signin-button"
      className="col-md-3 text-center border-right"
      onClick={props.mobileHeaderToggle}
    >
      {user.name}
    </div>)
  }

  return (
    <nav
      style={{ margin: "-20px", padding: "0", backgroundColor: "#fdd670", position: "sticky", top: '0', zIndex: "100"}}
      className="d-flex navzindex"
    >
      <div
        style={{ width: "100%" }}
        className="row justify-content-around my-auto navzindex"
      >
        <div className="col-2 my-auto">
          <span className="navbar-brand">
            <button
              type="button"
              onClick={sidebarToggle}
              id="sidebarCollapse"
              className="navbar-btn"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Link to="/"><img
              id="header-logo"
              className="egg_set img-fluid"
              style={{ width: "70%" }}
              src="/img/chaldal-logo-small.png"
              alt=""
            /></Link>
            
          </span>
        </div>

        <div className="col-5 justify-content-center my-auto">
          <div className="input-group my-auto navzindex">
            <input
              onChange={(event) => searchLocation(event)}
              type="text"
              className="form-control border-right-0"
              placeholder="Search for products (e.g. eggs, milk, potato)"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <span
                className="input-group-text border-left-0"
                style={{ backgroundColor: "white" }}
                id="basic-addon2"
              >
                <span className="fa fa-search form-control-feedback"></span>
              </span>
            </div>
          </div>
        </div>
        <div
          id="header-buttons"
          style={{ height: "100%" }}
          className="col-5 justify-content-center justify-content-sm-end my-auto"
        >
          <span onClick={props.mobileHeaderToggle}><i
            id="three-dot-button"
            className="fa fa-ellipsis-v"
            aria-hidden="true"
          ></i></span>
          <div
            style={{ height: "100%" }}
            className="row justify-content-around"
          >
            <div
              id="location-button"
              style={{ padding: "20px 0", height: "100%" }}
              className="col-md-3 text-center header-button border-left border-right"
            >
              <i className="fa fa-map-marker" aria-hidden="true"></i> Dhaka{" "}
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </div>
            <div
              id="help-button"
              style={{ padding: "20px 0", height: "100%" }}
              className="col-md-4 text-center header-button border-right"
            >
              <i className="fa fa-question-circle" aria-hidden="true"></i> Help
              and More
            </div>
            <div
              id="language-button"
              style={{ padding: "20px 0", height: "100%" }}
              className="col-md-2 text-center header-button border-right"
            >
              <span style={{ color: "red" }}>EN</span> | বাং
            </div>
            {signinButton}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
