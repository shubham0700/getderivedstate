import { createStore } from "redux";
import { reducerfun } from "../reducers/reducer";
let store = createStore(reducerfun);
export default store;
