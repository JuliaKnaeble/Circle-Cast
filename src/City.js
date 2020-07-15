import React from "react";
import Time from "./Time";

import "./City.css";

const City = (props) => {
  let citySearched = props.city;
  let currentCondition = props.description;

  return (
    <div className="City">
      <div className="city-name">{citySearched}</div>
      <Time area={props.area} />
      <div className="condition">{currentCondition}</div>
    </div>
  );
};

export default City;
