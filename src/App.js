import React from "react";

import Header from "./Header";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
