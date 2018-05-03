import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Appp from "./App1";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Appp />
  </Provider>,
  document.getElementById("root")
);
