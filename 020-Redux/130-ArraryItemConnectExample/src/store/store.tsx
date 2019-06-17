import { createStore } from "redux";

import reducer from "./reducer";
import MockData from "./MockData";

export default createStore(reducer, MockData.getData());