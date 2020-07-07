import React from "react";

import Header from "./Header";
import City from "./City";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <City />
      <Current />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
