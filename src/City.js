import React from "react";
import Time from "./Time";

import "./City.css";

export default function City(props) {
  let citySearched = props.city;
  let currentCondition = props.description;

  dayOfWeek = { day };
  fullHour = { hour };

  return (
    <div className="City">
      <div className="city-name">{citySearched}</div>
      <Time day={props.dayOfWeek} hour={props.fullHour} />
      <div className="condition">{currentCondition}</div>
    </div>
  );
}
