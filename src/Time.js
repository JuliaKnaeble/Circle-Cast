import React, { useState } from "react";

import "./Time.css";

export default function Time(props) {
  const [minute, setMinute] = useState(`00`);

  let minute = date.getMinutes();
  if (minute === 0) {
    minute = `00`;
  } else if (minute < 10) {
    minute = `0${minute}`;
  } else minute = date.getMinutes();
  setMinute(minute);

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
        {newDay} {props.hour}:{minute}
      </div>
    </div>
  );
}
