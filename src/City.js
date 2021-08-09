import React from "react";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

function City() {
  const [{ city }, dispatch] = useStateValue();
  const history = useHistory();

  const setCity = (city) => {
    dispatch({
      type: "SET_CITY",
      city: city,
    });
    history.push("/");
  };

  return (
    <div>
      <ul>
        <li onClick={() => setCity("Dhaka")}>Dhaka</li>
        <li onClick={() => setCity("Chattogram")}>Chattogram</li>
        <li onClick={() => setCity("Jessore")}>Jessore</li>
      </ul>
    </div>
  );
}

export default City;
