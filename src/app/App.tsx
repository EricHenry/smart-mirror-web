import * as React from 'react';
import './App.css';
import { Clock } from './components/Clock/Clock';
import { DateLong } from './components/DateLong/DateLong';

// const logo = require('./logo.svg');

class App extends React.Component<{}, null> {
  render() {
    return (
      <div className="top-row">
        <Clock />
        <DateLong />
        <div className="weather-col"></div>
        <div className="time-date-col"></div>
      </div>
    );
  }
}

export default App;
