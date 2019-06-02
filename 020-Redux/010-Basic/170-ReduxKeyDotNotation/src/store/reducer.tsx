import * as _ from "lodash";

export default (state: any, action: any) => {
    switch(action.type){
        case "UPDATE":
            if (action.event && action.event.target && action.event.target.name){
                let name = action.event.target.name;
                let newState =  _.clone(state)
                _.set(newState, name, action.event.target.value);
                return newState;
            }
            return state;
        default:
            return state;
    }
}