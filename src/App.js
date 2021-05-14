import React from "react";
import BreakLength from "./BreakLength";
import { SessionLength } from "./SessionLength";
import MainScreen from "./MainScreen";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakDef: 5,
      sessionDef: 25,
      timeLeft: 1500,
      screenText: "Session",
      playing: false,
    };
  }

  handleBrDecrement = () => {
    const { breakDef } = this.state;
    if (breakDef > 1) {
      this.setState({
        breakDef: breakDef - 1,
      });
    } else {
      this.setState({});
    }
  };

  handleBrIncrement = () => {
    const { breakDef } = this.state;
    if (breakDef < 60) {
      this.setState({
        breakDef: breakDef + 1,
      });
    } else {
      this.setState({
        //breakDef: breakDef
      });
    }
  };

  handleSeDecrement = () => {
    const { sessionDef, timeLeft } = this.state;
    if (sessionDef > 1) {
      this.setState({
        sessionDef: sessionDef - 1,
        timeLeft: timeLeft - 60,
      });
    } else {
      this.setState({});
    }
  };

  handleSeIncrement = () => {
    const { sessionDef, timeLeft } = this.state;
    if (sessionDef < 60) {
      this.setState({
        sessionDef: sessionDef + 1,
        timeLeft: timeLeft + 60,
      });
    } else {
      this.setState({});
    }
  };

  countdown = () => {
    const { playing } = this.state;
    if (playing === true) {
      clearInterval(this.interval);
      this.setState({
        playing: false,
      });
    } else {
      this.interval = setInterval(() => {
        this.decrementTimer();
        this.timer();
      }, 1000);
    }
  };

  decrementTimer = () => {
    this.setState({
      timeLeft: this.state.timeLeft - 1,
      playing: true,
    });
  };

  timer = () => {
    const { timeLeft, screenText } = this.state;
    if (screenText === "Session" && timeLeft === -1) {
      this.handleBeep();
      this.setState({
        timeLeft: this.state.breakDef * 60,
        screenText: "Break",
      });
    } else if (screenText === "Break" && timeLeft === -1) {
      this.handleBeep();
      this.setState({
        timeLeft: this.state.sessionDef * 60,
        screenText: "Session",
      });
    } else {
      this.setState({});
    }
  };

  handleBeep = () => {
    this.beep.play();
    this.beep.currentTime = 0.4;
    setTimeout(() => {
      this.beep.pause();
    }, 2700);
  };

  handleReset = () => {
    clearInterval(this.interval);
    this.beep.pause();
    this.beep.currentTime = 0;
    this.setState({
      breakDef: 5,
      sessionDef: 25,
      timeLeft: 1500,
      playing: false,
      screenText: "Session",
    });
  };

  render() {
    return (
      <div id="screen">
        <div id="title">
          <p id="title-p">Pomodoro Timer</p>
        </div>
        <MainScreen
          screenText={this.state.screenText}
          timeLeft={this.state.timeLeft}
          reset={this.handleReset}
          countdown={this.countdown}
        />

        <div id="br-se">
          <BreakLength
            breakDef={this.state.breakDef}
            brDec={this.handleBrDecrement}
            brInc={this.handleBrIncrement}
          />
          <SessionLength
            id="session"
            sessionDef={this.state.sessionDef}
            seDec={this.handleSeDecrement}
            seInc={this.handleSeIncrement}
          />
        </div>

        <audio
          src="https://sampleswap.org/samples-ghost/SOUND%20EFFECTS%20and%20NOISES/Electro%20and%20Synthetic/276[kb]super_mario_bros.wav.mp3"
          id="beep"
          ref={(ref) => (this.beep = ref)}
        />
      </div>
    );
  }
}
