export default (state: any = {counter: 0}, action: any) => {
    switch(action.type){
        case "UPDATE_DATA":
            if (action.data){
                return {
                    ...state,
                    data: action.data
                };
            }
            return state;
        default:
            return state;
    }
}
