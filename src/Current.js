import React from "react";

import "./Current.css";

export default function Current(props) {
  let currentTemp = Math.round(props.temperature);
  let currentHumidity = Math.round(props.humidity);
  let currentWind = Math.round(props.wind);
  let color = { backgroundColor: `#5B73F5` };

  return (
    <div className="Current">
      <div className="current-temp">
        <span className="unit">{currentTemp}°C</span>
      </div>
      <div className="big-circle" style={color}>
        <span className="gradient-overlay">
          <img
            src={require(`./Assets/${props.icon}.png`)}
            alt=""
            className="condition-icon"
          />
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
