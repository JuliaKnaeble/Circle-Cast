import React from "react";
import "./ForecastPreview.css";

export default function ForecastPreview(props) {
  let unitFahrenheitMax = props.unit;
  if (unitFahrenheitMax) {
    unitFahrenheitMax = `${Math.round((props.max * 9) / 5 + 32)}°F`;
  } else {
    unitFahrenheitMax = `${Math.round(props.max)}°C`;
  }
  let unitFahrenheitMin = props.unit;
  if (unitFahrenheitMin) {
    unitFahrenheitMin = `${Math.round((props.min * 9) / 5 + 32)}°F`;
  } else {
    unitFahrenheitMin = `${Math.round(props.min)}°C`;
  }

  let days = [
    `Sun`,
    `Mon`,
    `Tue`,
    `Wed`,
    `Thu`,
    `Fri`,
    `Sat`,
    `Sun`,
    `Mon`,
    `Tue`,
    `Wed`,
    `Thu`,
  ];
  let newDay = days[props.day];

  let newColor = props.max;
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
    <div className="forecast">
      <div className="small-circle" style={newColor}>
        <span className="gradient-overlay-small">
          <img
            src={require(`./Assets/${props.icon}.png`)}
            alt=""
            className="condition-icon-small"
          />
        </span>
      </div>
      <p className="day-future">{newDay}</p>
      <p className="temp-future">
        <span className="unit">{unitFahrenheitMax}</span> |{" "}
        <span className="future-low-temp" />
        <span className="future-low-temp unit">{unitFahrenheitMin}</span>
      </p>
    </div>
  );
}
