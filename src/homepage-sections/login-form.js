import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../StateProvider";
import { bake_cookie } from 'sfcookies';

function LoginForm(props) {

    const creds = {
        "email": "a@b.c",
        "password": "0000"
    };
    
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [{ user }, dispatch] = useStateValue();

    // const verifyUserExists = (response) => {
    //     if(response[])
    // }

    const login = (e) => {
        e.preventDefault();
        axios
        .post("https://chdl-clone-gb-project.herokuapp.com/auth/login", {
            email,
            password,
        })
        .then((res) => {
            console.log(res.data);
            //bake_cookie('jwt', res.data.jwt);
            document.cookie = `jwt=${res.data.jwt};max-age=604800;domain=chdl-clone-gb-project.herokuapp.com`
            dispatch({
                type:"LOGIN",
                // jwt:res.data.jwt,
                name:res.data.name,
                email:res.data.email,
            });
            // localStorage.setItem('jwt', res.data.jwt);
            localStorage.setItem('name', res.data.name);
            localStorage.setItem('email', res.data.email);
            
            props.loginFormToggle();
            //history.push("/");
        })
        .catch((err) => {
            console.log(err);
        });
    };

      const register = (e) => {
        e.preventDefault();
      };
    
    //   return (
    //     <div>
    //       <form onSubmit={(e) => login(e)}>
    //         email:
    //         <input value={email} onChange={(e) => setEmail(e.target.value)} />
    //         password:
    //         <input value={password} onChange={(e) => setPassword(e.target.value)} />
    //         <input type="submit" />
    //       </form>
    //     </div>
    //   );

    return (
        <div className="loginbox">
            <div id="logreg-forms">
                <div className="form-signin">
                    
                    
                    <div className="d-flex justify-content-between">
                        <h1 className="h3 mb-5 font-weight-normal" style={{textAlign: "left"}}> Log in</h1>
                        <span className="closeIcon" onClick={props.loginFormToggle}><i className="fas fa-times"></i></span>
                    </div>
                    
                    <div className="social-login">
                        <button className="btn facebook-btn social-btn" type="button"><span><i className="fas fa-facebook-circle" aria-hidden="true"></i> Sign in with Facebook</span> </button>
                    </div>
                    
                    <div className="social-login">
                        <button className="btn email-btn social-btn" type="button"><span><i className="fas fa-envelope"></i>
                            Login with Email</span> </button>
                    </div>
                    
                    <div className="row container vr__lines">
                        <div className="col-sm-4 vr_line"></div><div className="col-sm-2" style={{textAlign:"center"}}> OR  </div><div className=" vr_line col-sm-4"></div>
                    </div>
                    
                    {/* <h6 className="text-center my-5 mh">PLEASE ENTER YOUR MOBILE PHONE NUMBER</h6> */}
                    
                    <div className="text-center mt-2">
                        <form onSubmit={(e) => login(e)} id="login">
                    
                        
                        <input value={email} onChange={(e) => setEmail(e.target.value)} id="phone" type="tel" name="phone" placeholder="Email / Phone Number" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} id="phone" type="password" name="password" placeholder="Password" />
                        <input type="submit" className="btns" value="Sign up/Login" />
                        </form>
                        <div className="alert alert-info" style={{display: "none"}}></div>
                        <p className=" pb mt-4 ">This site is protected by reCAPTCHA and the Google <span style={{color: "cadetblue"}}>Privacy Policy</span> and <span style={{color: "cadetblue"}}>Terms of Service apply.</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;