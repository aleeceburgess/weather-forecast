import React from "react";
import ReactDOM from "react-dom";

import UpcomingWeatherCardContainer from "./Components/UpcomingWeatherCard/UpcomingWeatherCardContainer";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeatherContainer";
import Header from "./Components/Header/Header";

import "./styles/main.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="weather-widget">
          <div className="current-weather">
            <h2>Weather report</h2>
            <CurrentWeather />
          </div>
          <div className="upcoming-weather-cards">
            <UpcomingWeatherCardContainer />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
