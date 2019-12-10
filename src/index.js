import React from "react";
import ReactDOM from "react-dom";

import UpcomingWeatherCardContainer from "./Components/UpcomingWeatherCard/UpcomingWeatherCardContainer";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeatherContainer";
import Header from "./Components/Header/Header";

import "./styles/main.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "London",
      locationCountry: "United Kingdom",
      locationDate: 0
    };
  }

  componentDidMount = () => {
    this.getLocalDate(this.state.location);
  };

  getLocalDate = newLocation => {
    let offsetHours;
    let updatedCountry;
    switch (newLocation) {
      case "London":
        offsetHours = 0;
        updatedCountry = "United Kingdom";
        break;
      case "Prague":
        offsetHours = +1;
        updatedCountry = "Czechia";
        break;
      case "Perth":
        offsetHours = +8;
        updatedCountry = "Australia";
        break;
      case "Tokyo":
        offsetHours = +9;
        updatedCountry = "Japan";
        break;
      case "San Fransico":
        offsetHours = -8;
        updatedCountry = "United States";
        break;
      default:
        offsetHours = 0;
        updatedCountry = this.state.locationCountry;
    }
    this.setState({
      locationDate: new Date(
        new Date() + offsetHours * 3600 * 1000
      ).toDateString(),
      locationCountry: updatedCountry
    });
  };

  updateLocationClick = newLocation => {
    if (newLocation !== "") {
      this.setState({
        location: newLocation
      });
      this.getLocalDate(newLocation);
    }
  };

  render() {
    return (
      <div className="App">
        <Header updateLocationClick={this.updateLocationClick} />
        <div className="weather-widget">
          <div className="widget-header">
            <h2>Weather report</h2>
            <p className="location">
              {this.state.locationDate} | {this.state.location},{" "}
              {this.state.locationCountry}
            </p>
          </div>
          <div className="current-weather">
            <CurrentWeather />
          </div>
          <div className="upcoming-weather-cards">
            <UpcomingWeatherCardContainer location={this.state.location} />
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
