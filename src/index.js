import React from "react";
import ReactDOM from "react-dom";

import WeatherCardContainer from "./Components/WeatherCard/WeatherCardContainer";

import "./styles/main.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="weather-cards">
          <WeatherCardContainer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
