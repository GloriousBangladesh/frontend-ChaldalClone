import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import { useParams } from "react-router-dom";
import axios from "axios";


function ShowProduct(props) {
  let { product, query } = useParams();
  const [{pros},dispatch] = useStateValue();

  const locationHelper =
    window.location.protocol +
    "//" +
    window.location.hostname +
    ":" +
    "8000" +
    "/";
  // console.log(locationHelper)
  var catURL = "https://chdl-clone-gb-project.herokuapp.com/apis/category?q=" + product;

  //console.log(query)
  useEffect(() => {
    //logic for bringing product;
    
    if (props.purpose === "category") {
      axios
        .get(catURL)
        .then((res) => {
          console.log(res.data);
          if(res.data.result != pros){
            dispatch({
              type:"SHOW",
              pros:res.data.result,
            });
          }
        }
        ) 
        .catch((err) => {
          console.log(err);
        });
    }
    else{
      axios
      .get("https://chdl-clone-gb-project.herokuapp.com/apis/search?q=" + query)
      .then((res) => {
        console.log(res.data);
        console.log("aaaaaa");
        if(res.data.result != pros){
          dispatch({
            type:"SHOW",
            pros:res.data.result,
            prev:pros
          });
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);


  let displayItem = (
    
      pros.map((pro) => (
        <Product
          key={pro.id}
          id={pro.id}
          image={locationHelper + pro.image}
          title={pro.title}
          measure={pro.measure}
          price={parseFloat(pro.price)}
          description={pro.description}
        />
      ))
  );

  

  if (pros.length == 0) {
    if (props.purpose === "category") {
      displayItem = (
        <h3 className="text-muted text-center my-5" style={{ color: "grey" }}>
          No item for this category currently
        </h3>
      );
    } else {
      displayItem = (
        <h3 className="text-muted text-center my-5" style={{ color: "grey" }}>
          Your search <span style={{ color: "#a78e08" }}>{query}</span> did not
          match any products
        </h3>
      );
    }
  }

  return (
    <div className="row mt-5">
      {displayItem}
    </div>
  );
}

export default ShowProduct;
