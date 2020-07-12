import React, { useState } from "react";
import axios from "axios";

import "./Time.css";

export default function Time(props) {
  const [day, setDay] = useState(`Monday`);
  const [hour, setHour] = useState(`00`);
  const [minute, setMinute] = useState(`00`);

  let timezone = props.area;

  let timeUrl = `https://worldtimeapi.org/api/timezone/`;
  axios.get(`${timeUrl}${timezone}`).then(showTime);

  function showTime(response) {
    let days = [
      `Sunday`,
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
    ];
    let newDay = days[response.data.day_of_week];
    setDay(newDay);
    let date = new Date();
    let hour = date.getUTCHours();
    let inte = parseInt(hour);
    let offset = parseInt(response.data.utc_offset);
    let totalHour = inte + offset;
    if (totalHour >= 24) {
      return totalHour - 24;
    } else if (totalHour < 0) {
      totalHour += 24;
    } else if (totalHour === 0) {
      totalHour = `00`;
    } else if (totalHour < 10) {
      totalHour = `0${totalHour}`;
    } else totalHour = inte + offset;
    setHour(totalHour);
    let minute = date.getMinutes();
    if (minute === 0) {
      minute = `00`;
    } else if (minute < 10) {
      minute = `0${minute}`;
    } else minute = date.getMinutes();
    setMinute(minute);
  }

  return (
    <div>
      <div className="local-date">
        {day} {hour}:{minute}
      </div>
    </div>
  );
}
