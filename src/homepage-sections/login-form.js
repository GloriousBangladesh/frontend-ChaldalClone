import React from "react";


function LoginForm(props) {
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
                    
                    <h6 className="text-center my-5 mh">PLEASE ENTER YOUR MOBILE PHONE NUMBER</h6>
                    
                    <div className="text-center mt-2">
                        <form id="login" onSubmit="process(event)">
                    
                        
                        <input  id="phone" type="tel" name="phone" />
                        <input  type="submit" className="btns" value="Sign up/Login" />
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