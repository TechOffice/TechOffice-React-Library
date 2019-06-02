export default (state: any, action: any) => {
    switch(action.type){
        case "INCREASE_COUNTER":
            if (action.n){
                state = {
                    ...state,
                    counter: state.counter + action.n
                };
            }
            return state;
        case "DECREASE_COUNTER":
            if (action.n){
                state = {
                    ...state,
                    counter: state.counter - action.n
                };
            }
            return state;
        default:
            return state;
    }
}