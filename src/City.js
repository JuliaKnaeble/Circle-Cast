import React from "react";
import Time from "./Time";

import "./City.css";

export default function City(props) {
  let citySearched = props.city;
  let currentCondition = props.description;
  let day = props.dayOfWeek;
  let hour = props.fullHour;

  return (
    <div className="City">
      <div className="city-name">{citySearched}</div>
      <Time day={day} hour={hour} />
      <div className="condition">{currentCondition}</div>
    </div>
  );
}
