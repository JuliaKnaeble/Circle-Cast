import React from "react";

import "./Forecast.css";

export default function Forecast() {
  let forecastData = {
    day: "Mon",
    max: 20,
    min: 14,
  };
  return (
    <div className="forecast-flax-wrapper forecast-scroll">
      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>

      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}°C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>

      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}°C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>

      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}°C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>

      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}°C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>

      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}°C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>

      <div className="forecast">
        <div className="small-circle">
          <span className="gradient-overlay-small">
            <img src="asset/01d.png" alt="" className="condition-icon-small" />
          </span>
        </div>
        <p className="day-future">{forecastData.day}</p>
        <p className="temp-future">
          <span className="unit">{forecastData.max}°C</span> |{" "}
          <span className="future-low-temp" />
          <span className="future-low-temp unit">{forecastData.min}°C</span>
        </p>
      </div>
    </div>
  );
}
