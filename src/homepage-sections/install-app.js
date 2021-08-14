import React, {useEffect} from "react";
import intlTelInput from 'intl-tel-input';


function InstallApp() {
    useEffect(() => {
        const input = document.querySelector("#phone-number");
        intlTelInput(input, {
            // any initialisation options go here
        });
    }, []);

    return (
        <section className="mt-5">
            <div className="justify-content-center">
            </div>
            <div className="row">
                <div className="pb-0 category-cell text-center rounded col-md-8">
                    <h2 className="title h4 text-center font-weight-bold">Be a part of our family</h2>
                    <div className="container mt-5">
                        <div id="phone-number-form" className="input-group justify-content-center">
                            <input id="phone-number" type="tel" className="form-control"/>
                            <div className="input-group-append">
                                <span style={{color: "white"}} className="input-group-text bg-danger" id="basic-addon2">Get App</span>
                            </div>
                        </div>
                        <div className="alert alert-info" style={{display: "none"}}></div>
                    </div>
                    {/* <script>
                        $("#phone-number").intlTelInput({
                        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/8.4.6/js/utils.js"
                        });
                    </script> */}
                    <div className="row justify-content-center mt-4 mb-5">
                        <img style={{width: "50%"}} className="col-md-4 col-sm-1 img-fluid" src="/img/google-play.png"
                        alt="Download chaldal Android app"/>
                        <img style={{width: "50%"}} className="col-md-4 col-sm-1 img-fluid" src="/img/app-store.png"
                        alt="Download chaldal iOS app"/>
                    </div>
                </div>

                <div className="pb-0 mb-0 category-cell text-center rounded col">
                <img className="img-fluid float-right" src="/img/app-preview.png"/>
                </div>
            </div>
        </section>
    )
}

export default InstallApp;