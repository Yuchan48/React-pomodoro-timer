import React from "react";

export default class MainScreen extends React.Component {
  timer = () => {
    let minute = Math.floor(this.props.timeLeft / 60);
    let second = this.props.timeLeft - minute * 60;
    second = second < 10 ? "0" + second : second;
    minute = minute < 10 ? "0" + minute : minute;

    return minute + ":" + second;
  };

  render() {
    return (
      <div>
        <div id="main-screen">
          <p id="timer-label">{this.props.screenText}</p>
          <p id="time-left">{this.timer()}</p>
        </div>
        <div id="scr-buttons">
          <div id="start_stop" onClick={this.props.countdown}>
            <i class="fa fa-play fa-2x" aria-hidden="true"></i>
            <i class="fa fa-pause fa-2x" aria-hidden="true"></i>
          </div>
          <div id="reset" onClick={this.props.reset}>
            <i class="fa fa-refresh fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}
