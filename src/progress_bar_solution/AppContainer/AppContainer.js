import React, { Component } from "react";
import RequestButton from "../RequestButton/RequestButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import FinishRequestButton from "../FinishRequestButton/FinishRequestButton";

export default class AppContainer extends Component {
  state = {
    name: "testing state",
  };
  render() {
    return (
      <div className="container">
        <ProgressBar />
        <div className="row">
          <RequestButton />
          <FinishRequestButton />
        </div>
      </div>
    );
  }
}
