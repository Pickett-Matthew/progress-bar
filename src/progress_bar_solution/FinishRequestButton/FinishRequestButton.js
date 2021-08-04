import React, { Component } from "react";

export default class FinishRequestButton extends Component {
  render() {
    return (
      <button className="finish-request" onClick={this.props.finishrequest}>
        FINISH REQUEST
      </button>
    );
  }
}
