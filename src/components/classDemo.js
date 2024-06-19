import React, { Component } from "react";

export default class ClassDemo extends Component {
  constructor() {
    super();
    this.state = { data: 200 };
  }

  render() {
    return (
      <div>
        This is class Demo <br />
        Props are- {this.props.state} {this.props.gender} <br />
        <button onClick={() => this.setState({ data: 230 })}>Change Val</button>
        States are- {this.state.data}
      </div>
    );
  }
}
