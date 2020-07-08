import React from "react";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  let forecastData = {
    day: "Mon",
    max: 20,
    min: 14,
  };
  return (
    <div className="forecast">
      <div className="small-circle">
        <span className="gradient-overlay-small">
          <img src="asset/01d.png" alt="" className="condition-icon-small" />
        </span>
      </div>
      <p className="day-future">{forecastData.day}</p>
      <p className="temp-future">
        <span className="unit">{Math.round(props.max)}C</span> |{" "}
        <span className="future-low-temp" />
        <span className="future-low-temp unit">{Math.round(props.min)}°C</span>
      </p>
    </div>
  );
}
