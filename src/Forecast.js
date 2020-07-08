import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  let latitude = props.latitude;
  let longitude = props.longitude;

  function showForecast(response) {
    setForecast(response.data);
    console.log(response.data);
    setLoaded(true);
  }

  if (loaded && props.latitude === forecast.lat) {
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
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
            </span>
          </div>
          <p className="day-future">{forecastData.day}</p>
          <p className="temp-future">
            <span className="unit">{forecast.daily[0].temp.max}C</span> |{" "}
            <span className="future-low-temp" />
            <span className="future-low-temp unit">{forecastData.min}°C</span>
          </p>
        </div>

        <div className="forecast">
          <div className="small-circle">
            <span className="gradient-overlay-small">
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
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
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
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
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
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
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
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
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
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
              <img
                src="asset/01d.png"
                alt=""
                className="condition-icon-small"
              />
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
  } else {
    let apiKeyWeather = `e4d700d9f2e204bb797d9166314fc0ba`;
    let weatherForecastUrl = `https://api.openweathermap.org/data/2.5/onecall`;
    axios
      .get(
        `${weatherForecastUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKeyWeather}&units=metric`
      )
      .then(showForecast);
    return null;
  }
}
