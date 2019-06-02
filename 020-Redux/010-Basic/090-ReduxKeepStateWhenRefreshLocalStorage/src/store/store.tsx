import { createStore } from "redux";
import { reducer } from "./reducer";
import stateLoader from "./stateLoader";

const store =  createStore(reducer, stateLoader.loadState());

store.subscribe(function(){
    stateLoader.saveState(store.getState());
})

export default store;