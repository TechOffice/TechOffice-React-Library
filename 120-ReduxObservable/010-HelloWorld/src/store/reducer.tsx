export default (state: any = {counter: 0}, action: any) => {
    switch(action.type){
        case "ADD_COUNTER":
            if (action.n){
                return {
                    ...state,
                    counter: state.counter + action.n
                };
            }
            return state;
        case "DECREASE_COUNTER":
            if (action.n){
                return{counter: state.counter - action.n};
            }
            return state;
        default:
            return state;
    }
}
