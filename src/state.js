import React, { Component } from "react";

export default class state extends Component {
  constructor(props) {
    super(props);
    this.state({
      name: "Satyam",
      age: 12,
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}
