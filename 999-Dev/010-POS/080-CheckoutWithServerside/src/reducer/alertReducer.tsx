

export default (state = {}, action) => {
    switch (action.type){
        case 'CLOSE_ALERT': {
            return {};
        }
        case 'ADD_ALERT': {
            return {
                message: action.message
            };
        }
    }
    return state;
}