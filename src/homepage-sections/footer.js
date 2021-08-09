import React from "react";


function Footer() {
    return (
        <section className="mt-5">
            <div className="row">
                
                <div className="col-md-9 servicefooter">
                    <div className="mx-2 text-md-start text-center">
                        <img className="egg_set" src="img/chaldal-logo-small.png" alt="" />
                        <p style={{ fontSize: "small", color: "#615e58" }}>
                            Chaldal.com is an online shop available in Dhaka, Narayanganj,
                            Chattogram and Jashore. We believe time is valuable to our fellow
                            residents, and that they should not have to waste hours in
                            traffic, brave bad weather and wait in line just to buy basic
                            necessities like eggs! This is why Chaldal delivers everything you
                            need right at your door-step and at no additional cost.
                        </p>
                    </div>
                    <div
                        style={{ color: "#615e58" }}
                        className="row mx-2 my-5 justify-content-around footer-links">
                        <div className="col-md-3 col-sm-8 text-md-start text-center">
                            <h5>Customer Service</h5>
                            <hr className="m-0" />
                            <a href="">
                                <p className="m-0">Contact Us</p>
                            </a>
                            <a href="">
                                <p className="m-0">FAQ</p>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-8 text-md-start text-center">
                            <h5>Customer Service</h5>
                            <hr className="m-0" />
                            <a href="">
                                <p className="m-0">Contact Us</p>
                            </a>
                            <a href="">
                                <p className="m-0">FAQ</p>
                            </a>
                        </div>
                        <div className="col-md-3 col-sm-8 text-md-start text-center">
                            <h5>Customer Service</h5>
                            <hr className="m-0" />
                            <a href="">
                                <p className="m-0">Contact Us</p>
                            </a>
                            <a href="">
                                <p className="m-0">FAQ</p>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 mx-0">
                    <div className="row">
                        <div className="col-sm-12 d-flex mb-5 mt-4">
                            <img
                                className="mr-2"
                                width="50%"
                                src=" https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/google_play_store.png?q=low&webp=1&alpha=1"
                                alt=""
                            />
                            <img
                                width="50%"
                                src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/app_store.png?q=low&amp;webp=1&amp;alpha=1"
                            />
                        </div>
                    </div>
                    <div className="text-center text-md-right">
                        <img
                            className=""
                            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/phone_icon.png?q=low&amp;webp=1&amp;alpha=1"
                        />
                        <span
                            className="font-weight-bold"
                            style={{ fontSize: "x-large", fontWeight: "700" }}>
                            01889966334
                        </span>
                        <p className="emailSupport">
                            <span>or email</span>{" "}
                            <strong style={{ fontWeight: "700" }}>support@amjam.com</strong>
                        </p>
                    </div>
                    <div className="justify-content-center justify-content-md-end text-md-right col-sm-12 social d-flex mr-0 pr-0 mb-5 mt-4">
                        <img
                            className="mx-1"
                            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/Facebook.png?q=low&amp;webp=1&amp;alpha=1"
                        />
                        <img
                            className="mx-1"
                            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/Youtube.png?q=low&amp;webp=1&amp;alpha=1"
                        />
                        <img
                            className="mx-1"
                            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/twitter.png?q=low&amp;webp=1&amp;alpha=1"
                        />
                        <img
                            className="mx-1"
                            src="https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web/1.5.0+DataCenter-Release-2255/Default/components/shared/NewFooter/images/Instagram.png?q=low&amp;webp=1&amp;alpha=1"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Footer;
