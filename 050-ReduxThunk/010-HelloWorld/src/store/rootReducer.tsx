export default function(state: any = {counter: 0}, action: any){
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
