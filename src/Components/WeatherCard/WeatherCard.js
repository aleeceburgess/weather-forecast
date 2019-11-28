import React from "react";

export const WeatherCard = props => {
  return props.daysofWeek.map((days, i) => {
    return (
      <div className="weather-card">
        <p className="day-of-week">{days}</p>
        <span className="icon-weather icon-drizzle" aria-label="windy" />
        <div className="temps">
          <p className="high-temp">50deg</p>
          <p className="low-temp">1deg</p>
        </div>
      </div>
      );
    });
  };