import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer, {counter: 0});
export default store;