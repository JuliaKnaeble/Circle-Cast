import React, { useState } from "react";
import axios from "axios";

import "./City.css";

export default function City(props) {
  const [day, setDay] = useState("");

  let citySearched = props.city;
  let currentCondition = props.description;

  let timeUrl = `https://worldtimeapi.org/api/timezone/`;
  axios.get(`${timeUrl}${props.area}`).then(showTime);

  function showTime(response) {
    console.log(response.data);
    let days = [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
    ];
    setDay(response.data.day_of_week);
  }

  return (
    <div className="City">
      <div className="city-name">{citySearched}</div>
      <div className="local-date">{day} 10:00</div>
      <div className="condition">{currentCondition}</div>
    </div>
  );
}
