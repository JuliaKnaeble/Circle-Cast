import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="page-name">
        <a href="index.html">
          <strong>Circle</strong>Cast
        </a>
      </div>
      <div className="search-form">
        <form>
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
  );
}
