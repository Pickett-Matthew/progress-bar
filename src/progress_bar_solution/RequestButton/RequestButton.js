import React, { Component } from "react";

export default class RequestButton extends Component {
  render() {
    return (
      <button
        data-testid="test-reqBtn"
        className={this.props.btnstyle}
        onClick={this.props.startrequest}
      >
        {this.props.btntext}
      </button>
    );
  }
}
