import React from "react";

import "./City.css";

export default function City() {
  let localData = {
    city: "London",
    date: "Monday 10:00",
    condition: "Light Rain",
  };
  return (
    <div calssName="City">
      <div className="city-name">{localData.city}</div>
      <div className="local-date">{localData.date}</div>
      <div className="condition">{localData.condition}</div>
    </div>
  );
}
