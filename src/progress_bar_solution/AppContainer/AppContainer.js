import React, { Component } from "react";
import RequestButton from "../RequestButton/RequestButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import FinishRequestButton from "../FinishRequestButton/FinishRequestButton";

/**
 * Container to hold the progress bar solution
 */
export default class AppContainer extends Component {
  state = {
    requestBtnText: "START REQUEST",
    barStyle: "progress-bar",
  };

  /**
   * Reacts to the RequestButton onClick function, sets the state to change innerText
   * and initalize the progress bar animation
   */

  startRequest = () => {
    this.setState({
      requestBtnText: "LOADING...",
      barStyle: "progress-bar loading",
    });
  };

  animationEnded = () => {
    this.setState({
      requestBtnText: "START REQUEST",
      barStyle: "progress-bar loading hang",
    });
  };

  render() {
    const { barStyle } = this.state;
    return (
      <div className="container">
        <ProgressBar barstyle={barStyle} startfade={this.animationEnded} />
        <div className="row">
          <RequestButton
            btntext={this.state.requestBtnText}
            startrequest={this.startRequest}
          />
          <FinishRequestButton />
        </div>
      </div>
    );
  }
}
