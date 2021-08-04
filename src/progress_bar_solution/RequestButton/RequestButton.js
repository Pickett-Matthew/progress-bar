import React, { Component } from "react";

export default class RequestButton extends Component {
  render() {
    return (
      <button className="request-button" onClick={this.props.startrequest}>
        {this.props.btntext}
      </button>
    );
  }
}
