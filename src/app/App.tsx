import * as React from 'react';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { DateLong } from './components/DateLong/DateLong';
import { Weather } from './components/Weather/Weather';

// const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="top-row">
        <div className="weather-col">
          <Weather />
        </div>
        <div className="time-date-col">
          <Clock />
          <DateLong />
        </div>
      </div>
    );
  }
}

export default App;
