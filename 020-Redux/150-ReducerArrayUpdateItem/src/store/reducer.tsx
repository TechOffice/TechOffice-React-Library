export default (state: any, action: any) => {
    switch(action.type){
        case "INCREASE_COUNTER":
            if (action.n){
                var newItems = state.items.map((item, index)=>{
                    if (index != 0){
                        return item
                    }else {
                        return {
                            ...item,
                            name: "Testing"
                        }
                    }
                })
                state = {
                    ...state,
                    items: newItems
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