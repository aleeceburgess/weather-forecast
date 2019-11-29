import React from "react";

export const WeatherCard = props => {
  return props.fiveDayForecast.map((forecast, i) => {
    return (
      <div className="weather-card" key={i}>
        <p className="day-of-week">{forecast.dayOfWeek}</p>
        <img src={`http://openweathermap.org/img/wn/${forecast.weatherIcon}@2x.png`} alt={forecast.weatherType} />
        <div className="temps">
          <p className="high-temp">{Math.round(forecast.maxTemp)} deg</p>
          <p className="low-temp">{Math.round(forecast.minTemp)} deg</p>
        </div>
      </div>
      );
    });
  };