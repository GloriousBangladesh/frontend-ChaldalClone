import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../StateProvider";
//import { bake_cookie } from 'sfcookies';
import Cookies from 'universal-cookie';

function LoginForm(props) {

    const creds = {
        "email": "a@b.c",
        "password": "0000"
    };

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [{ user }, dispatch] = useStateValue();

    // const verifyUserExists = (response) => {
    //     if(response[])
    // }

    const [formState, setFormState] = useState("LOGIN");

    function capitalizeFirstLetter(str) {
        var firstLetter = str.substr(0, 1);
        return firstLetter.toUpperCase() + str.substr(1);
    }

    const login = (e) => {
        e.preventDefault();
        axios
            .post("https://chdl-clone-gb-project.herokuapp.com/auth/login", {
                'email': email,
                'password': password,
            })
            .then((res) => {
                console.log(res.data);
                //bake_cookie('jwt', res.data.jwt);
                // document.cookie = `referral_key=hello;max-age=604800;domain=example.com`
                //document.cookie = `jwt=${res.data.jwt};max-age=604800;HTTPOnly=true;SameSite=None`;
                // const cookies = new Cookies();
                // cookies.set('jwt', res.data.jwt, { path: '/' });
                dispatch({
                    type: "LOGIN",
                    jwt: res.data.jwt,
                    name: res.data.name,
                    email: res.data.email,
                });
                localStorage.setItem('jwt', res.data.jwt);
                localStorage.setItem('name', res.data.name);
                localStorage.setItem('email', res.data.email);

                props.loginFormToggle();
                //history.push("/");
            })
            .catch((err) => {
                console.log(err);

            });
    }


    const register = (e) => {
        e.preventDefault();
        axios
            .post("https://chdl-clone-gb-project.herokuapp.com/auth/register", {
                'email': email,
                'password': password,
                'name': name,
            })
            .then((res) => {
                console.log(res.data);
                setFormState("REG_FINISH");
                document.getElementById("messageBox").innerHTML = "Your account bas been created successfully!";
            })
            .catch((err) => {
                console.log(err);
                console.log(err.response.data)
                setFormState("REG_ERROR");

                let errMessage = "";
                let temp;
                for(var key in err.response.data) {
                    temp = err.response.data[key];
                    console.log("##################");
                    console.log(temp, key);
                    if(Array.isArray(temp)){
                        temp.forEach((item) => {
                            errMessage += key + ": " + capitalizeFirstLetter(item) + "<br/><br/>";
                        })
                    }
                    else{
                        errMessage += key + ": " +  capitalizeFirstLetter(temp) + "<br/><br/>";
                    }
                }
                document.getElementById("messageBox").innerHTML = errMessage;
                
            });
    }


    const loginBoxUpper = (
        <div>
            <div className="social-login">
                <button className="btn facebook-btn social-btn" type="button"><span><i className="fas fa-facebook-circle" aria-hidden="true"></i> Sign in with Facebook</span> </button>
            </div>

            <div className="social-login">
                <button className="btn email-btn social-btn" type="button"><span><i className="fas fa-envelope"></i>
                    Login with Email</span> </button>
            </div>

            <div className="row container vr__lines">
                <div className="col-sm-4 vr_line"></div><div className="col-sm-2" style={{ textAlign: "center" }}> OR  </div><div className=" vr_line col-sm-4"></div>
            </div>
        </div>
    );

    let formBottomText;

    if(formState == "REGISTER"){
        formBottomText = (
            <p className="pb mt-4" id="formBottomText">Already Have An Account? <span onClick={() => setFormState("LOGIN")} style={{ color: "blue", cursor: "pointer" }}>Login</span> Now!</p>
        );
    }
    else if(formState == "LOGIN"){
        formBottomText = (
            <p className="pb mt-4" id="formBottomText">Don't Have An Account? <span onClick={() => setFormState("REGISTER")} style={{ color: "blue", cursor: "pointer" }}>Sign Up</span> Now!</p>
        );
    }
    else if(formState == "REG_FINISH"){
        formBottomText = <p className="pb mt-4" id="formBottomText">You can now <span onClick={() => setFormState("LOGIN")} style={{ color: "blue", cursor: "pointer" }}>log in</span>.</p>
    }
    else if(formState == "REG_ERROR"){
        formBottomText = <p className="pb mt-4" id="formBottomText">You can try <span onClick={() => setFormState("REGISTER")} style={{ color: "blue", cursor: "pointer" }}>signing up</span> agian.</p>
    }

    return (
        <div className="loginbox">
            <div id="logreg-forms">
                <div className="form-signin">


                    <div className="d-flex justify-content-between">
                        <h1 className="h3 mb-5 font-weight-normal" style={{ textAlign: "left" }}> Log in</h1>
                        <span className="closeIcon" onClick={() => {props.loginFormToggle(); setFormState("LOGIN")}}><i className="fas fa-times"></i></span>
                    </div>

                    {formState == "LOGIN" ? loginBoxUpper : ""}

                    {/* <h6 className="text-center my-5 mh">PLEASE ENTER YOUR MOBILE PHONE NUMBER</h6> */}
                    {formState == "LOGIN" || formState == "REGISTER" ? 
                    <div className="text-center mt-2">
                        <form onSubmit={(e) => {
                            if(formState == "LOGIN")
                                login(e);
                            else
                                register(e);
                            
                            }} id="login">

                            {formState != "LOGIN" ? <input value={name} onChange={(e) => setName(e.target.value)} id="phone" type="tel" name="username" placeholder="Your Name" /> : ""}
                            <input value={email} onChange={(e) => setEmail(e.target.value)} id="phone" type="tel" name="phone" placeholder="Email / Phone Number" />
                            <input value={password} onChange={(e) => setPassword(e.target.value)} id="phone" type="password" name="password" placeholder="Password" />
                            <input type="submit" className="btns" value={formState == "LOGIN" ? "Sign In" : "Sign Up"} />
                        </form>
                        <div className="alert alert-info" style={{ display: "none" }}></div>
                        
                    </div>
                    : <h4 id="messageBox">message</h4>}
                    {formBottomText}
                </div>
            </div>
        </div>
    )
}

export default LoginForm;