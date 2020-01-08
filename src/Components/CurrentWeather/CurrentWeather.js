import React from "react";
import Lottie from "react-lottie";

export class CurrentWeather extends React.Component {
  render() {
    return (
      <div>
        <Lottie
          options={this.props.currentWeather.weatherAnimation}
          height={100}
          width={100}
        />
        <p className="todays-forecast">
          Todays forcast is {this.props.currentWeather.weatherType}
        </p>
        <div className="temps">
          <p className="high-temp">
            High: {Math.floor(this.props.currentWeather.maxTemp)}°
          </p>
          <p className="low-temp">
            Low: {Math.floor(this.props.currentWeather.minTemp)}°
          </p>
        </div>
      </div>
    );
  }
}
