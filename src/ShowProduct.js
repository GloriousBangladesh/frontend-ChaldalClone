import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import Product from "./Product";
import { useParams } from "react-router-dom";

function ShowProduct() {
  let { product } = useParams();
  const [pros, setPros] = useState([
    { id: 1, title: "mango", price: 200, description: "yummy mango" },
    { id: 2, title: "banana", price: 500, description: "yummy banana" },
  ]);

  useEffect(() => {
    //logic for bringing product;
  }, []);

  return (
    <div>
      {pros.map((pro) => (
        <Product
          key={pro.id}
          id={pro.id}
          title={pro.title}
          image={"abc"}
          price={pro.price}
          description={pro.description}
        />
      ))}
    </div>
  );
}

export default ShowProduct;
