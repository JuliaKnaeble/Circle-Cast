import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header
        router="/"
        defaultCity="Tel Aviv"
        unitC={{
          color: `#fcfeff`,
          backgroundColor: `#465866`,
          borderRadius: `50%`,
          cursor: `default`,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
