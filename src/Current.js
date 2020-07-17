import React from "react";

import "./Current.css";

const Current = (props) => {
  let currentTemp = Math.round(props.temperature);
  let currentHumidity = Math.round(props.humidity);
  let currentWind = Math.round(props.wind);
  let unitFahrenheit = props.unit;
  if (unitFahrenheit) {
    unitFahrenheit = `${Math.round((props.temperature * 9) / 5 + 32)}°F`;
  } else {
    unitFahrenheit = `${Math.round(props.temperature)}°C`;
  }

  let newColor = currentTemp;
  if (newColor >= 44) {
    newColor = { backgroundColor: `#801109` };
  } else if (newColor >= 40) {
    newColor = { backgroundColor: `#D64338` };
  } else if (newColor >= 36) {
    newColor = { backgroundColor: `#FF694B` };
  } else if (newColor >= 32) {
    newColor = { backgroundColor: `#FF8744` };
  } else if (newColor >= 28) {
    newColor = { backgroundColor: `#FF9F48` };
  } else if (newColor >= 24) {
    newColor = { backgroundColor: `#FFB15A` };
  } else if (newColor >= 20) {
    newColor = { backgroundColor: `#FFC06A` };
  } else if (newColor >= 16) {
    newColor = { backgroundColor: `#FFD07B` };
  } else if (newColor >= 12) {
    newColor = { backgroundColor: `#FFE18F` };
  } else if (newColor >= 8) {
    newColor = { backgroundColor: `#FBE8B6` };
  } else if (newColor >= 4) {
    newColor = { backgroundColor: `#FDF5DD` };
  } else if (newColor >= 0) {
    newColor = { backgroundColor: `#ECF5FE` };
  } else if (newColor >= -4) {
    newColor = { backgroundColor: `#DCE7FE` };
  } else if (newColor >= -8) {
    newColor = { backgroundColor: `#B9CDFF` };
  } else if (newColor >= -12) {
    newColor = { backgroundColor: `#93B0FF` };
  } else if (newColor >= -16) {
    newColor = { backgroundColor: `#7398FF` };
  } else if (newColor >= -20) {
    newColor = { backgroundColor: `#5B73F5` };
  } else if (newColor >= -24) {
    newColor = { backgroundColor: `#4952D9` };
  } else if (newColor >= -28) {
    newColor = { backgroundColor: `#372FC3` };
  } else {
    newColor = { backgroundColor: `#2306AA` };
  }

  return (
    <div className="Current">
      <div className="current-temp">
        <span className="unit">{unitFahrenheit}</span>
      </div>
      <div className="big-circle" style={newColor}>
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
};

export default Current;
