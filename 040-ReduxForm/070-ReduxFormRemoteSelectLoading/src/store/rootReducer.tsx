import { combineReducers } from "redux";
import { reducer } from 'redux-form';

let requestCounter = 0;

const rootReducer = combineReducers({
    form: reducer,
    loading: function(state = {inProgress: false}, action){
        switch(action.type){
            case "REQUEST":
                requestCounter = requestCounter + 1;
                console.log("request");
                return {
                    inProgress: true
                };
            case "REQUEST_DONE":
                requestCounter = requestCounter - 1;
                console.log("request done");
                if (requestCounter == 0 ){
                    return  {
                        inProgress: false
                    } ;
                }
                return {
                    inProgress: true
                };
            default:
                return state;
        }
    }
});

export default rootReducer;