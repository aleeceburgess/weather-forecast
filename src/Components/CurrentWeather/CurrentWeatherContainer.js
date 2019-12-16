import React from "react";
import { CurrentWeather } from "./CurrentWeather";
var animationPaths = require("./lotties/animationPaths");

class CurrentWeatherContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: this.props.location,
      currentAPI: {},
      currentForecastState: {
        weatherType: "",
        weatherAnimation: "",
        maxTemp: "N/A",
        minTemp: "N/A"
      }
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.location !== this.props.location) {
      this.setState(
        {
          location: this.props.location
        },
        this.getWeather
      );
    }
  };

  componentDidMount = () => {
    this.getWeather();
  };

  getWeather = () => {
    // OpenWeather Info

    const openWeatherKey = "faa3b9d358ff0e05601c8ec6ea446ef5";
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
    const urlToFetch = `${weatherUrl}?&q=${
      this.state.location
    }&APPID=${openWeatherKey}&units=metric`;

    fetch(urlToFetch)
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({
          currentAPI: data
        });
        this.createCurrentWeather();
      });
  };

  createCurrentWeather = () => {
    let currentAPI = this.state.currentAPI;
    let currentWeather = {
      weatherType: "",
      weatherAnimation: "",
      minTemp: "N/A",
      maxTemp: "N/A"
    };

    currentWeather.weatherType = currentAPI.weather[0].description;
    currentWeather.minTemp = currentAPI.main.temp_min;
    currentWeather.maxTemp = currentAPI.main.temp_max;
    currentWeather.weatherAnimation = this.setWeatherAnimation(
      currentWeather.weatherType
    );

    //set the state with the current forecast
    this.setState({
      currentForecastState: currentWeather
    });
  };

  setWeatherAnimation = weatherType => {
    let animationType = this.getWeatherAnimation(weatherType);
    let animationPath = animationPaths.animationPaths[animationType];
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationPath,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return defaultOptions;
  };

  getWeatherAnimation = weatherType => {
    switch (weatherType) {
      case "clear sky":
        return "sunny";

      case "scattered clouds":
      case "few clouds":
      case "broken clouds":
      case "overcast clouds":
        return "windy";

      case "shower rain":
      case "light intensity drizzle":
      case "drizzle":
      case "heavy intensity drizzle":
      case "light intensity drizzle rain":
      case "drizzle rain":
      case "heavy intensity drizzle rain":
      case "shower rain and drizzle":
      case "heavy shower rain and drizzle":
      case "shower drizzle":
      case "heavy intensity shower rain":
      case "ragged shower rain":
      case "light rain":
      case "rain":
      case "moderate rain":
      case "heavy intensity rain":
      case "very heavy rain":
      case "extreme rain":
        return "partlyShower";

      case "thunderstorm":
      case "thunderstorm with light rain":
      case "thunderstorm with rain":
      case "thunderstorm with heavy rain":
      case "light thunderstorm":
      case "heavy thunderstorm":
      case "ragged thunderstorm":
      case "thunderstorm with light drizzle":
      case "thunderstorm with drizzle":
      case "thunderstorm with heavy drizzle":
        return "thunder";

      case "snow":
      case "freezing rain":
      case "light snow":
      case "Heavy snow":
      case "Sleet":
      case "Light shower sleet":
      case "Shower sleet":
      case "Light rain and snow":
      case "Rain and snow":
      case "Light shower snow":
      case "Shower snow":
      case "Heavy shower snow":
        return "snow";

      case "mist":
      case "Smoke":
      case "Haze":
      case "sand/ dust whirls":
      case "fog":
      case "sand":
      case "dust":
      case "volcanic ash":
      case "squalls":
      case "tornado":
        return "mist";

      default:
        return "N/A";
    }
  };

  render() {
    return <CurrentWeather currentWeather={this.state.currentForecastState} />;
  }
}

export default CurrentWeatherContainer;
