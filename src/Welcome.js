import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="wrapper-welcome">
      <div className="welcome-circle align-welcome"></div>
      <div className="welcome-text align-welcome">
        <p>What's the weather like in...</p>
      </div>
    </div>
  );
};

export default Welcome;
