import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel'

function ClientReaction() {
  return (
    <section className="mt-5 pb-5">
        <h2 className="title text-center font-weight-bold">What our clients are saying</h2>
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                <div className="row justify-content-around mx-5">
                    <div className="col-md-2 text-center">
                        <img className="rounded-circle" src="https://www.reactiongifs.com/r/overbite.gif" style={{width: '100px', height: '100px'}} />
                        {/*<img class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style="width: 100px;height:100px;">*/}
                    </div>
                    <div className="col-md-9">
                        <p >Lorem ipsum dolor sit </p>
                        <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                        </p>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="row justify-content-around mx-5">
                    <div className="col-md-2 text-center">
                        <img className="rounded-circle" src="https://www.reactiongifs.com/r/overbite.gif" style={{width: '100px', height: '100px'}} />
                        {/*<img class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style="width: 100px;height:100px;">*/}
                    </div>
                    <div className="col-md-9">
                        <p >Lorem ipsum dolor sit </p>
                        <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                        </p>
                    </div>
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="row justify-content-around mx-5">
                    <div className="col-md-2 text-center">
                        <img className="rounded-circle" src="https://www.reactiongifs.com/r/overbite.gif" style={{width: '100px', height: '100px'}} />
                        {/*<img class="rounded-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style="width: 100px;height:100px;">*/}
                    </div>
                    <div className="col-md-9">
                        <p >Lorem ipsum dolor sit </p>
                        <p className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                        </p>
                    </div>
                </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
  )
}

export default ClientReaction;