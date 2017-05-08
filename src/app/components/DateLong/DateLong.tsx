import * as React from 'react';
import './DateLong.css';

interface DateState {
  weekday: string;
  date: string;
}

export class DateLong extends React.Component<{}, DateState> {
  private timerID: number;

  constructor(props: {}) {
    super(props);
    this.state = this.getLocalDate();
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
    this.setState(this.getLocalDate());
  }

  getLocalDate(): DateState {
    const localDate = new Date()
      .toLocaleDateString(
        'en-US',
        {
          weekday: 'long',
          month: 'short',
          day: 'numeric'
        }
      )
      .split(', '); // format the date.

    return {
      weekday: localDate[0],
      date: localDate[1]
    };
  }

  render(): JSX.Element {
    return (
      <div className="date">
        <p>{this.state.weekday}</p>
        <p>{this.state.date}</p>
      </div>
    );
  }
}