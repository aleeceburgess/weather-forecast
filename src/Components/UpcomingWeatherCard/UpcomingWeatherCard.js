import React from "react";

export const UpcomingWeatherCard = props => {
  return props.fiveDayForecast.map((forecast, i) => {
    return (
      <div className="upcoming-weather-card" key={i}>
        <p className="day-of-week">{forecast.dayOfWeek}</p>
        <img src={`http://openweathermap.org/img/wn/${forecast.weatherIcon}@2x.png`} alt={forecast.weatherType} width="50px" />
        <div className="temps">
          <p className="high-temp">{Math.round(forecast.maxTemp)}°</p>
          <p className="low-temp">{Math.round(forecast.minTemp)}°</p>
        </div>
      </div>
      );
    });
  };