import React, { Component } from "react";

export default class ProgressBar extends Component {
  render() {
    let { barstyle } = this.props;
    return <span className={barstyle}></span>;
  }
}

// onAnimationEnd={this.props.startfade}
