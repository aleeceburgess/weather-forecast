import React from "react";
import ReactDOM from "react-dom";

import WeatherCardContainer from "./Components/WeatherCard/WeatherCardContainer";

import "./styles/main.css";
import "./styles/weather-icons.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div className="weather-cards">
          <WeatherCardContainer />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
