import combinedReducer from "./combinedReducer";
import crossSliceReducer from "./crossSliceReducer";
import formReducer from "./formReducer";


export default (state, action) => {
    const immediateState = combinedReducer(state, action);
    const formState = formReducer(immediateState, action);
    const finalState = crossSliceReducer(formState, action);
    return finalState;
}

