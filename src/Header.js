import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import Current from "./Current";
import "./Header.css";

export default function Header() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      city: response.data.name,
      description: response.data.weather[0].description,
      temp: response.data.main.temp,
      //icon: response.data.weather[0].icon,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `e4d700d9f2e204bb797d9166314fc0ba`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

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
      <City city={weather.city} description={weather.description} />
      <Current
        temperature={weather.temp}
        humidity={weather.humid}
        wind={weather.wind}
      />
    </div>
  );
}
