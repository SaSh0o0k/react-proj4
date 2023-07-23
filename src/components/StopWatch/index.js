import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0),
      isRunning: false
    };
  }

  //* Запуск при старті
  componentDidMount() {
    this.start();
  }

  start = () => {
    if (!this.state.isRunning) {
      this.runTimer();
      this.setState({ isRunning: true });
    }
  }

  runTimer = () => {
    this.idInterval = setTimeout(() => {
      const { time } = this.state;
      const newTime = new Date(time.getTime() + 1000);
      this.setState({ time: newTime });
      this.runTimer(); //* Рекурсія
    }, 1000);
  }

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0), isRunning: false });
  }

  stop = () => {
    clearInterval(this.idInterval);
    this.setState({ isRunning: false });
  }

  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString('en-GB')}</h1>
        <button onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </div>
    );
  }
}

export default StopWatch;