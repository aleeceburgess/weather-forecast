import React from "react";
import ReactDOM from "react-dom";

import UpcomingWeatherCardContainer from "./Components/UpcomingWeatherCard/UpcomingWeatherCardContainer";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeatherContainer";
import Header from "./Components/Header/Header";

import "./styles/main.css";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      location: 'London',
      locationDate: 0
    }
  }

  componentDidMount = () => {
    this.getLocalDate();
  }

  getLocalDate = () => {
    let offsetHours = 0;
    switch (this.state.location) {
      case 'London':
        offsetHours = 0;
        break;
      case 'Prague':
        offsetHours = +1;
        break;
      case 'Perth':
        offsetHours = +8;
        break;
      case 'Tokyo':
        offsetHours = +9;
        break;
      case 'San Fransico':
        offsetHours = -8;
        break;
      default:
        offsetHours = 0
    }
    this.setState({
      locationDate: new Date( new Date() + offsetHours * 3600 * 1000).toDateString()
    })
  }

  updateLocationClick = (newLocation) => {
    this.getLocalDate();
    this.setState({
      location: newLocation
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          updateLocationClick={this.updateLocationClick} />
        <div className="weather-widget">
          <div className="widget-header">
            <h2>Weather report</h2>
            <p className="location">{this.state.locationDate} | {this.state.location}</p>
          </div>
          <div className="current-weather">
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
