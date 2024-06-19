import React, { Component } from "react";

export default class LifeCycleDemo extends Component {
  // method is called before anything else, when the component is initiated,
  // it is the natural place to set up the initial state and other initial values.
  constructor() {
    super();
    this.state = { data: 200 };
  }

  //   it overwrites the state with props
  //   This is the natural place to set the state object based on the initial props.
  // static getDerivedStateFromProps(props, state) {
  //   return { data: props.color };
  // }

  // called after the component is rendered
  // componentDidMount() {
  //   alert("component has mounted");
  //   // API calls to load data intially
  // }

  // UPDATING
  shouldComponentUpdate() {
    return false;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    alert("Before the update, the data was " + prevState.data);
  }

  componentDidUpdate() {
    alert("comp has updated");
  }

  componentWillUnmount() {
    alert("comp going to be unmounted");
  }

  //   the method that actually outputs the HTML to the DOM.
  render() {
    return (
      <div>
        This is LifeCycle Demo <br />
        <button onClick={() => this.setState({ data: 45000 })}>
          Change Data
        </button>
        States are- {this.state.data}
      </div>
    );
  }
}
