import * as React from 'react';
import './Weather.css';

interface IWeatherComponent {
  data: any;
}

const weatherIconMapping = {
  'clear-day': '', 
  'clear-night': '', 
  'rain': '', 
  'snow': '', 
  'sleet': '', 
  'wind': '', 
  'fog': '', 
  'cloudy': '', 
  'partly-cloudy-day': '', 
  'partly-cloudy-night':  ''
};

export class Weather extends React.Component<{}, IWeatherComponent> {
  constructor(props: any) {
    super(props); 
    this.state = { data: {}};
  }
  componetDidMount() {
    // this.getWeather();
    setInterval(() => {
      // this.getWeather();
    }, (24 * 60 * 60000))
  }

  getWeather() {
    fetch('localhost:5000/weather')
      .then(res => this.setState({ data: res }))
      .then(() => console.log(this.state.data));
  }

  getWeatherIcon(icon: string): string {
    return weatherIconMapping[icon];
  }

  render() {
    return (
      <div className="weather-container">
        <h1 className="weather">59<sup>&deg;</sup><i className="wi wi-day-sunny wi-flip-vertical"></i></h1>      
        <p>Light rain tonght and tomorrow morning</p>
      </div>
    );
  }
}