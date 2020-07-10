import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header defaultCity="Tel Aviv" />
      <Footer />
    </div>
  );
}

export default App;
