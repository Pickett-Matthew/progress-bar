import React, { Component } from "react";

export default class RequestButton extends Component {
  render() {
    return (
      <button className={this.props.btnstyle} onClick={this.props.startrequest}>
        {this.props.btntext}
      </button>
    );
  }
}
