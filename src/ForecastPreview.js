import React from "react";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  let color = { backgroundColor: `#5B73F5` };
  let forecastData = {
    day: "Mon",
  };
  return (
    <div className="forecast">
      <div className="small-circle" style={color}>
        <span className="gradient-overlay-small">
          <img
            src={require(`./Assets/${props.icon}.png`)}
            alt=""
            className="condition-icon-small"
          />
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
