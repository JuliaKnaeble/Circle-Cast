import React from "react";

import "./Time.css";

export default function Time(props) {
  let hour = props.hour;

  let date = new Date();
  let minutes = date.getMinutes();

  if (minutes === 0) {
    minutes = `00`;
  } else if (minutes < 10) {
    minutes = `0${minutes}`;
  } else {
    minutes = date.getMinutes();
  }

  let days = [
    `Sunday`,
    `Monday`,
    `Tuesday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`,
  ];
  let newDay = days[props.day];

  return (
    <div>
      <div className="local-date">
        {newDay} {hour}:{minutes}
      </div>
    </div>
  );
}
