import React from "react";

import {WeatherIcons} from "./WeatherIcons";
import './WeatherIcons.css';

class WeatherIconsContainer extends React.Component {
  getWeatherIcon = (weatherIcon) => {
    switch(weatherIcon){
      case '01d':
      case '01n':
        return ['sun']
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return ['cloud']
      case '09d':
      case '09n':
        return ['basecloud', 'showers'] //basecloud and icon-showers
      case '10d':
      case '10n':
          return ['basecloud', 'rainy'] //basecloud icon-rainy
      case '11d':
      case '11n':
        return ['basethundercloud', 'thunder'] // basethundercloud icon-thunder
      case '13d':
      case '13n':
        return ['basecloud', 'snowy']  // basecloud icon-snowy
      case '50d':
      case '50n':
        return ['mist'] // icon-mist
      default:
        return ['help']
    }
  }


  render = () => {
    return (
      <div className="weather-icon">
        <WeatherIcons
          weatherIcon={this.getWeatherIcon(this.props.weatherIcon)} 
          weatherType={this.props.weatherType} />
      </div>
    );
  };
}

export default WeatherIconsContainer;
