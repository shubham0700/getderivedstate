import React, { Component } from "react";
import "./App.css";

import App from "./App";

import App2 from "./App2";
class Appp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      lastname: "",
      age: 23
    };
  }

  render() {
    return (
      <div className="App">
        <App />
        <App2 />
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Appp;
