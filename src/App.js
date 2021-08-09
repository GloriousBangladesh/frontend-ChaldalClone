import "./App.css";
import "./css/style.css";
import "./css/twemoji-awesome.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intl-tel-input/build/css/intlTelInput.css';
import React, { useEffect } from "react";
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

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {}, []);

  return (
    <div className="wrapper">
      <Router>
        <Sidebar/>
        <div id="content">
          <Header />
          <Switch>
            <Route path="/select-city">
              <City />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/products/:product">
              <ShowProduct />
            </Route>
            <Route path="/checkout">
              <Checkout />
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
  );
}

export default App;
