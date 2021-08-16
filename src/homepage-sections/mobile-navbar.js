import { id } from "postcss-selector-parser";
import React from "react";
import { useStateValue } from "../StateProvider";
import axios from "axios";
import { delete_cookie } from 'sfcookies';
import { useHistory } from "react-router-dom";


function MobileNavbar(props) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const toOrders = () => {
    history.push("/orders");
  }

  const logout = () => {
    axios.post("https://chdl-clone-gb-project.herokuapp.com/auth/logout")
    .then((res) => {
        console.log(res);
        delete_cookie('jwt');
        localStorage.clear();
        props.mobileHeaderToggle();
        window.location.href = "/";
    })
    .catch((err) => {
      console.log(err);
      delete_cookie('jwt');
      localStorage.clear();
      props.mobileHeaderToggle();
    window.location.href = "/";
    });
  }

  let yourOrdersButton = (
    <div onClick={() => {props.mobileHeaderToggle(); toOrders()}} className="headerCollaspedButton">
        <button className="btn hcb-btn" type="button">
          <span>
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> &nbsp; Your
            Orders
          </span>
        </button>
    </div>
  );

  let signinButton = "";

  let signoutButton = (
    <div onClick={logout} className="headerCollaspedButton">
      <button
        style={{ backgroundColor: "#ff0000", color: "white" }}
        className="btn hcb-btn font-weight-bold"
        type="button"
      >
        <span>sabit | Sign out</span>
      </button>
    </div>
  );

  if (user == null) {
    signinButton = (
      <div onClick={() => {props.mobileHeaderToggle(); props.loginFormToggle()}} className="headerCollaspedButton">
        <button
          style={{ backgroundColor: "#ff0000", color: "white" }}
          className="btn hcb-btn font-weight-bold"
          type="button"
        >
          <span>Sign in</span>
        </button>
      </div>
    );

    yourOrdersButton = '';
    signoutButton = '';
  }

  return (
    <div
      className="headerCollaspedButtonsBox"
      style={{ display: "none", opacity: "0" }}
    >
      <div id="headerCollaspedButtonsInnerDiv">
        <div className="inner-box justify-content-center">
          <span
            onClick={props.mobileHeaderToggle}
            style={{ float: "right" }}
            className="closeIcon"
          >
            <i className="fas fa-times"></i>
          </span>

          <div onClick={props.mobileHeaderToggle} className="headerCollaspedButton">
            <button className="btn hcb-btn" type="button">
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i> &nbsp;
                Dhaka &nbsp;{" "}
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>

          <div onClick={props.mobileHeaderToggle} className="headerCollaspedButton">
            <button className="btn hcb-btn" type="button">
              <span>
                <i className="fas fa-question-circle" aria-hidden="true"></i>{" "}
                &nbsp; Help & More
              </span>
            </button>
          </div>

          <div onClick={props.mobileHeaderToggle} className="headerCollaspedButton">
            <button className="btn hcb-btn" type="button">
              <span>
                <span style={{ color: "red" }}>EN</span> | বাং
              </span>
            </button>
          </div>

          {yourOrdersButton}
          {signinButton}
          {signoutButton}
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
