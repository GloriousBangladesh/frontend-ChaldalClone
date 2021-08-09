import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import { useParams } from "react-router-dom";
import axios from "axios";

function ShowProduct() {
  let { product } = useParams();
  const [pros, setPros] = useState([]);

  const locationHelper = window.location.protocol + "//" + window.location.hostname + ":" + "8000" + "/" 
  // console.log(locationHelper)

  useEffect(() => {
    //logic for bringing product;
    axios
      .get("http://localhost:8000/apis/category?q=" + product)
      .then((res) => {
        console.log(res.data.result);
        setPros(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row mt-5">
      {pros.map((pro) => (
        <Product
          key={pro.id}
          id={pro.id}
          image={locationHelper+pro.image}
          title={pro.title}
          measure={pro.measure}
          price={parseFloat(pro.price)}
          description={pro.description}
        />
      ))}
    </div>
  );
}

export default ShowProduct;
