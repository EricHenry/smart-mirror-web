import * as React from 'react';
import './Clock.css';

interface ClockState {
  timeString: string;
}

export class Clock extends React.Component<{}, ClockState> {
  private timerID: number;

  constructor(props: {}) {
    super(props);
    this.state = { timeString: this.getTime() };
  }

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(), 
      60000
     );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timeString: this.getTime()
    });
  }

  getTime(): string {
    const localTime = new Date().toLocaleTimeString(
      [],
      {
        hour: '2-digit',
        minute: '2-digit',
      }
    );

    return localTime.slice(0, -3)           // remove the AM/PM at the end

  }

  render(): JSX.Element {
    return (
      <h1 className="clock">{this.state.timeString}</h1>
    );
  }
}
