import React from "react";

import "./Current.css";

export default function Current(props) {
  let currentTemp = Math.round(props.temperature);
  let currentHumidity = Math.round(props.humidity);
  let currentWind = Math.round(props.wind);
  return (
    <div className="Current">
      <div className="current-temp">
        <span className="unit">{currentTemp}°C</span>
      </div>
      <div className="big-circle">
        <span className="gradient-overlay">
          <img src="asset/01d.png" alt="" className="condition-icon" />
        </span>
      </div>

      <div>
        <ul>
          <li>Humid: {currentHumidity}%</li>
          <li>Wind: {currentWind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
