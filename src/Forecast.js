import React, { useState } from "react";
import axios from "axios";

import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [day, setDay] = useState(`Mon`);
  let latitude = props.latitude;
  let longitude = props.longitude;
  let timezone = props.area;

  function showTime(response) {
    let newDay = response.data.day_of_week;
    setDay(newDay);
    setLoaded(true);
  }

  function showForecast(response) {
    setForecast(response.data);
    let timeUrl = `https://worldtimeapi.org/api/timezone/`;
    axios.get(`${timeUrl}${timezone}`).then(showTime);
  }

  if (loaded && props.latitude === forecast.lat) {
    return (
      <div className="forecast-flax-wrapper forecast-scroll">
        <ForecastPreview
          max={forecast.daily[0].temp.max}
          min={forecast.daily[0].temp.min}
          icon={forecast.daily[0].weather[0].icon}
          day={day}
        />
        <ForecastPreview
          max={forecast.daily[1].temp.max}
          min={forecast.daily[1].temp.min}
          icon={forecast.daily[1].weather[0].icon}
          day={day + 1}
        />
        <ForecastPreview
          max={forecast.daily[2].temp.max}
          min={forecast.daily[2].temp.min}
          icon={forecast.daily[2].weather[0].icon}
          day={day + 2}
        />
        <ForecastPreview
          max={forecast.daily[3].temp.max}
          min={forecast.daily[3].temp.min}
          icon={forecast.daily[3].weather[0].icon}
          day={day + 3}
        />
        <ForecastPreview
          max={forecast.daily[4].temp.max}
          min={forecast.daily[4].temp.min}
          icon={forecast.daily[4].weather[0].icon}
          day={day + 4}
        />
        <ForecastPreview
          max={forecast.daily[5].temp.max}
          min={forecast.daily[5].temp.min}
          icon={forecast.daily[5].weather[0].icon}
          day={day + 5}
        />
        <ForecastPreview
          max={forecast.daily[6].temp.max}
          min={forecast.daily[6].temp.min}
          icon={forecast.daily[6].weather[0].icon}
          day={day + 6}
        />
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
