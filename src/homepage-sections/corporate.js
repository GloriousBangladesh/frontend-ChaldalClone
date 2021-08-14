import React from "react";

function Corporate() {
  return (
    <section className="mt-5 mb-5" id="corporate">
        <div className="mainContainer">
          <div className="corporate-content">
            <div className="initialLabel">
              <img src="/img/brifcase.svg" alt=""/>
              <h2>Do you own a business?</h2>
              <h3>Become a Corporate Customer</h3>
            </div>
            <ul className="corporate-benefits">
              <li className="corporate-benefits-item">
                <i className="white-icon rounded fa fa-check fa-2x" aria-hidden="true"></i>
                <img src="/img/money.svg" alt=""/>
                <h4>Special Corporate Prices</h4>
              </li>
              <li className="corporate-benefits-item">
                <i className="white-icon rounded  fa fa-check fa-2x" aria-hidden="true"></i>
                <img src="/img/support.svg" alt=""/>
                <h4>24 Hour Support</h4>
              </li>
              <li className="corporate-benefits-item"><i className="white-icon rounded  fa fa-check fa-2x"
                  aria-hidden="true"></i>
                <img src="/img/delivery.svg" alt=""/>
                <h4>Flexible Free Delivery</h4>
              </li>
            </ul>
            <a href="/corporate">find out more</a>
          </div>
        </div>
    </section>
  );
}

export default Corporate;