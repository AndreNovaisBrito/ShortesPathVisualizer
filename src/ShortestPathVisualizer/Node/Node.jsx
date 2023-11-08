import React, { Component } from "react";

import "./Node.css";

export default class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { style } = this.props;
    const { style } = this.props;
    return <div className="node" style={style}></div>;
  }
}
