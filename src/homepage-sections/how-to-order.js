import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

function HowToOrder() {
  return (
    <section className="mt-5 pb-5 px-3">
        <h2 className="title text-center font-weight-bold">How to order from Chaldal ?</h2>
        <div className="mt-4 justify-content-center">
          
          {/* <div className="my__carousel_main"> */}
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/tutorial-1.jpg"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/tutorial-2.jpg"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="img/tutorial-3.jpg"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        {/* </div> */}
        
        </div>
      </section>
  );
}

export default HowToOrder;