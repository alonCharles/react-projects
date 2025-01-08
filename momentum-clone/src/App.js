import React from "react";
import Weather from "./components/Weather";
import Time from "./components/Time";
import Date from "./components/Date";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <Weather/>
      <Time/>
      <Date/>
      <Quote/>
    </div>
  );
}

export default App;
