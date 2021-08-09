import React, { useState } from "react";

function ProductCategories() {
  return (
    <section className="product-categories">
      <h2 className="title text-center font-weight-bold">
        Our Product Categories
      </h2>
      <div className="category-cell-container">
        <div className="row justify-content-center">
            
          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Fruits & Vegetables
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-mango"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Meat & Fish
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-fish"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">Cooking</div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-mango"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Beverages
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-beverage-box"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Home & Cleaning
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-broom"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Pest Control
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-bug"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Office Products
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-paperclip"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Beauty Products
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-lipstick"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Health Products
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-pill"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Pet Care
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-cat"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Home Appliances
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-chair"></i>
              </div>
            </div>
          </div>

          <div className="category-cell border text-center rounded col-md-3 m-1">
            <div className="row justify-content-around">
              <div className="align-middle category-name col-md-9">
                Baby Care
              </div>

              <div className="col-md-2">
                <i className="twa twa-lg twa-baby-bottle"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProductCategories;