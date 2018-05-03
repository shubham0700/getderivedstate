import React, { Component } from "react";

import { connect } from "react-redux";
import "./App.css";

class App2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cache: [],
      index: 0,
      prevKeys: []
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("updated props in the child", nextProps);
    console.log("previosu state", prevState);
    return true;
  }
  render() {
    return (
      <div>
        <p>hello</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in map to props in app2", state);
  return {
    ...state.reducer
  };
};

export default connect(mapStateToProps)(App2);
