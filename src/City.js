import React from "react";

import "./City.css";

export default function City(props) {
  let citySearched = props.city;
  let currentCondition = props.description;

  return (
    <div className="City">
      <div className="city-name">{citySearched}</div>
      <div className="local-date">Monday 10:00</div>
      <div className="condition">{currentCondition}</div>
    </div>
  );
}
