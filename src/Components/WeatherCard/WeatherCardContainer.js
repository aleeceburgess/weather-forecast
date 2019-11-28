import React from "react";

import { WeatherCard } from "./WeatherCard";

class WeatherCardContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysofWeek: []
    };
  }

  componentDidMount() {
    // OpenWeather Info
    const openWeatherKey = "faa3b9d358ff0e05601c8ec6ea446ef5";
    const weatherUrl = "https://api.openweathermap.org/data/2.5/forecast";
    const urlToFetch = `${weatherUrl}?&q=London&APPID=${openWeatherKey}`;

    fetch(urlToFetch)
      .then(results => {
        return results.json();
      })
      .then(data => {
        let daysOfweekArr = this.getDays(this.getDates(data));
        this.setState({
          daysofWeek: daysOfweekArr
        });
      });
  }

  getDates(data) {
    //returns an array of dates which have been returned from the API call
    let dates = [];
    let regex = /\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/g;
    for (let i = 0; i < data.list.length; i++) {
      let date = data.list[i].dt_txt.match(regex);
      date = date.toString();
      if (dates.indexOf(date) === -1) {
        dates.push(date);
      }
    }
    return dates;
  }

  getDays(dates) {
    // returns an array of days of the week from the API call using getDates
    let days = [];
    dates.forEach(date => {
      let UTCdate = new Date(date);
      let day = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        UTCdate
      );
      days.push(day);
    });
    return days;
  }

  render() {
    return (
      <WeatherCard daysofWeek={this.state.daysofWeek} />
    );
  }
}

export default WeatherCardContainer;
