import React from "react";
import Lottie from 'react-lottie'
import animationData from './lotties/4801-weather-partly-shower.json'

class CurrentWeatherContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render(){

    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions}
              height={100}
              width={100}
        />
      </div>
    )
  }
}

export default CurrentWeatherContainer;
