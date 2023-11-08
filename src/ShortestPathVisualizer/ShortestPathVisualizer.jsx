import React, { Component } from "react";
import "./ShortestPathVisualizer.css";
import Node from "./Node/Node";

const rows = 43;
const columns = 70;

const renderNode = (row, col) => {
  console.log("row=", row);
  console.log("col=", col);

  if (row === 15 && col === 15) {
    return <Node key={`${row}-${col}`} style={{ backgroundColor: "red" }} />;
  }
  if (row === 30 && col === 50) {
    return <Node key={`${row}-${col}`} style={{ backgroundColor: "blue" }} />;
  }

  return <Node key={`${row}-${col}`} />;
};

const renderRow = (row) => {
  const squares = Array.from({ length: columns }, (_, col) =>
    renderNode(row, col)
  );
  return (
    <div key={row} className="row">
      {squares}
    </div>
  );
};
const grid = Array.from({ length: rows }, (_, row) => renderRow(row));

class ShortestPathVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your component's state
    };
  }

  componentDidMount() {
    // Code to run after the component has been rendered to the DOM
  }

  componentDidUpdate(prevProps, prevState) {
    // Code to run after the component's props or state have changed
  }

  componentWillUnmount() {
    // Code to clean up resources or event listeners when the component is unmounted
  }

  render() {
    return (
      <div>
        <div className="grid-container">{grid}</div>
      </div>
    );
  }
}

export default ShortestPathVisualizer;
