import React, { Component } from "react";

export default class FinishRequestButton extends Component {
  render() {
    return (
      <button
        data-testid="test-finish-btn"
        className="finish-request"
        onClick={this.props.finishrequest}
      >
        FINISH REQUEST
      </button>
    );
  }
}
