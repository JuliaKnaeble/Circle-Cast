import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import Current from "./Current";
import Forecast from "./Forecast";
import "./Header.css";

export default function Header(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });
  const [timezone, setTimezone] = useState("");
  const [day, setDay] = useState("");
  const [hour, setHour] = useState({ ready: false });

  function showTime(response) {
    setDay(response.data.day_of_week);
    let date = new Date();
    let hours = date.getUTCHours();
    let inte = parseInt(hours);
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
    setHour({
      ready: true,
      hourSet: totalHour,
    });
  }

  function showTimezone(response) {
    setTimezone(response.data.timezone);
    let timeUrl = `https://worldtimeapi.org/api/timezone/`;
    axios.get(`${timeUrl}${timezone}`).then(showTime);
  }

  function showWeather(response) {
    setWeather({
      ready: true,
      city: response.data.name,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      latitude: response.data.coord.lat,
      longitude: response.data.coord.lon,
    });
    let latitude = response.data.coord.lat;
    let longitude = response.data.coord.lon;
    let apiKeyWeather = `a785b12636ed229463fa77e0a6deb5be`;
    let weatherForecastUrl = `https://api.openweathermap.org/data/2.5/onecall`;
    axios
      .get(
        `${weatherForecastUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKeyWeather}&units=metric`
      )
      .then(showTimezone);
  }

  function search() {
    let apiKey = `a785b12636ed229463fa77e0a6deb5be`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (weather.ready && hour.ready) {
    return (
      <div>
        <div className="Header">
          <div className="page-name">
            <a href="index.html">
              <strong>Circle</strong>Cast
            </a>
          </div>
          <div className="search-form">
            <form onSubmit={handleSubmit}>
              <button>
                <i className="fas fa-search search-icon" />
              </button>
              <input
                className="text-input"
                type="text"
                placeholder="Search for a city"
                autoComplete="off"
                spellCheck="false"
                autoFocus
                onChange={handleChange}
              />
            </form>
          </div>
          <div>
            <a href="http://">
              <span className="c-selected conversion-c">C</span>
              <span className="fahrenheit conversion-f">F</span>
            </a>
          </div>
        </div>
        <City
          city={weather.city}
          description={weather.description}
          dayOfWeek={day}
          fullHour={hour}
        />
        <Current
          temperature={weather.temp}
          humidity={weather.humid}
          wind={weather.wind}
          icon={weather.icon}
        />
        <Forecast
          latitude={weather.latitude}
          longitude={weather.longitude}
          dayOfWeek={day}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
