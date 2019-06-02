
export default (state = [], action) => {
    if (action.type == "ADD_PAID_RESULT"){
        if (action.paidResult && action.paidResult.amount && Number(action.paidResult.amount) > 0){
            let newState = state.slice();
            newState.push(action.paidResult);
            return newState;
        }
    }
    return state;
}