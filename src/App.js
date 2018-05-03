import React, { Component } from "react";

import { connect } from "react-redux";
import "./App.css";
import { abc } from "./actions/action";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      lastname: "",
      age: 32
    };
  }
  componentDidMount(props) {
    console.log("this is the component did mount in the app", props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextprops", nextProps);
    console.log("nextstate", nextState);
    return true;
  }
  componentWillReceiveProps(nextProps, prevState) {
    console.log("updated state in teh app", nextProps);
    console.log("previosu state in  the app", prevState);
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("updated state in teh app", nextProps);
  //   console.log("previosu state in  the app", prevState);
  //   return true;
  // }
  changevalue = event => {
    console.log("this is teh console.log", event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  };
  submitfun = event => {
    event.preventDefault();
    console.log("function is being stopp", this.state);
    this.props.dispatch(abc(this.state));
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitfun}>
          <input type="text" name="first" onChange={this.changevalue} />

          <input type="text" name="lastname" onChange={this.changevalue} />

          <input type="text" name="age" onChange={this.changevalue} />
          <button type="submit">submit</button>
        </form>

        <h1>{this.state.age}</h1>

        <h1>{this.state.first}</h1>

        <h1>{this.state.lastname}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state in map to props in app", state);
  return {
    ...state.reducer
  };
};

export default connect(mapStateToProps)(App);
