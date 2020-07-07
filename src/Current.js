import React from "react";

import "./Current.css";

export default function Current() {
  let currentWeather = {
    temp: 18,
    humid: 50,
    wind: 3,
  };
  return (
    <div className="Current">
      <div className="current-temp">
        <span className="unit">{currentWeather.temp}°C</span>
      </div>
      <div className="big-circle">
        <span className="gradient-overlay">
          <img src="asset/01d.png" alt="" className="condition-icon" />
        </span>
      </div>

      <div>
        <ul>
          <li>Humid: {currentWeather.humid}%</li>
          <li>Wind: {currentWeather.wind}km/h</li>
        </ul>
      </div>
    </div>
  );
}
