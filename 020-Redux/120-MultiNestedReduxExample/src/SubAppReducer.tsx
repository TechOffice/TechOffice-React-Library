import { createStore, Store } from "redux";

export const SubAppReducer = function(state: any, action: any){
    switch(action.type){
        case "ADD_COUNTER":
            if (action.n){
                state = {counter: state.counter + action.n};
            }
            return state;
        case "DECREASE_COUNTER":
            if (action.n){
                state = {counter: state.counter - action.n};
            }
            return state;
        default:
            return state;
    }
}
