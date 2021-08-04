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
    showFinishBtn: false,
    reqBtnStyle: "request-button",
  };

  /**
   * Reacts to the RequestButton onClick function, sets the state to change innerText
   * and initalize the progress bar animation
   */
  startRequest = () => {
    this.setState({
      requestBtnText: "LOADING...",
      barStyle: "progress-bar loading",
      showFinishBtn: true,
      reqBtnStyle: "request-button clicked",
    });
  };

  /**
   * called from the FinishRequestButton, animation will fade out and state is back to inital
   */
  finishRequest = () => {
    this.setState({
      barStyle: "progress-bar loading complete",
      requestBtnText: "START REQUEST",
      showFinishBtn: false,
      reqBtnStyle: "request-button",
    });
  };

  render() {
    const { barStyle, requestBtnText, showFinishBtn, reqBtnStyle } = this.state;
    return (
      <div className="container">
        <ProgressBar barstyle={barStyle} />
        <div className="row">
          <RequestButton
            btntext={requestBtnText}
            startrequest={this.startRequest}
            btnstyle={reqBtnStyle}
          />
          {showFinishBtn && (
            <FinishRequestButton finishrequest={this.finishRequest} />
          )}
        </div>
      </div>
    );
  }
}
