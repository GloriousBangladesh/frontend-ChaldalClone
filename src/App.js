import "./App.css";
import "./css/style.css";
import "./css/twemoji-awesome.css";
import "./css/products-page.css";
import "./css/login-form.css";
import "./css/mobile-navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import City from "./City";
import Login from "./Login";
import ShowProduct from "./ShowProduct";
import Checkout from "./Checkout";
import Sidebar from "./sidebar";
import HeaderBanner from "./homepage-sections/header-banner"
import ProductCategories from "./homepage-sections/product-categories"
import HowToOrder from "./homepage-sections/how-to-order"
import LoveChaldal from "./homepage-sections/love-chaldal"
import ClientReaction from "./homepage-sections/client-reaction"
import Corporate from "./homepage-sections/corporate"
import InstallApp from "./homepage-sections/install-app"
import Map from "./homepage-sections/map"
import GreyRow from "./homepage-sections/grey-row"
import Footer from "./homepage-sections/footer";
import LoginForm from "./homepage-sections/login-form";
import MobileNavbar from "./homepage-sections/mobile-navbar";
import ShowOrders from "./homepage-sections/show-orders"


function App() {
  const [{ basket }, dispatch] = useStateValue();
  
  const [loginForm, setLoginForm] = useState(false);

  const loginFormToggle = () => {
    var formElement = document.getElementsByClassName("loginbox")[0];
    var wrapperElement = document.getElementsByClassName("wrapper")[0];

    if(loginForm === false){
      formElement.style.display = "block";
      wrapperElement.classList.add("greyOverlay")
      setLoginForm(!loginForm);
      formElement.style.opacity = "1";
    }
    else{
      wrapperElement.classList.remove("greyOverlay")
      setLoginForm(!loginForm);
      formElement.style.opacity = "0";
      formElement.style.display = "none";
    }
  }

  const [mobileHeader, setmobileHeader] = useState(false);
  const mobileHeaderToggle = () => {
    var formElement = document.getElementsByClassName("headerCollaspedButtonsBox")[0];
    var wrapperElement = document.getElementsByClassName("wrapper")[0];

    if(mobileHeader === false){
      formElement.style.display = "block";
      wrapperElement.classList.add("greyOverlay")
      setmobileHeader(!mobileHeader);
      formElement.style.opacity = "1";
    }
    else{
      wrapperElement.classList.remove("greyOverlay")
      setmobileHeader(!mobileHeader);
      formElement.style.opacity = "0";
      formElement.style.display = "none";
    }
  }



  useEffect(() => {
    if (localStorage.getItem("name")) {
      dispatch({
        type:"LOGIN",
        jwt: localStorage.getItem("jwt"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
      });
    }
  }, []);

  return (
    <div>
      <LoginForm loginFormToggle={loginFormToggle}/>
      <MobileNavbar loginFormToggle={loginFormToggle} mobileHeaderToggle={mobileHeaderToggle}/>
      <div className="wrapper">
        <Router>
          <Sidebar/>
          <div id="content">
            {/* <Cart/> */}
            <Checkout />
            <Header loginFormToggle={loginFormToggle} mobileHeaderToggle={mobileHeaderToggle}/>
            <Switch>
              <Route path="/select-city">
                <City />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/products/:product">
                <ShowProduct purpose="category"/>
              </Route>
              <Route path="/orders/">
                <ShowOrders />
              </Route>
              {/* <Route path="/checkout">
                <Checkout />
              </Route> */}
              <Route path="/search/:query">
                <ShowProduct purpose="search"/>
              </Route>
              <Route path="/">
                <HeaderBanner/>
                <ProductCategories/>
                <HowToOrder/>
                <LoveChaldal/>
                <ClientReaction/>
                <Corporate/>
                <InstallApp/>
                <Map/>
                <GreyRow/>
                <Footer/>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
