
export default (state, action) => {
    switch (action.type) {
        case 'UPDATE_TOTAL_DISCOUNT': {
          return {
              ...state
          };
        }
        case 'ADD_PAID_RESULT': {
            if (state.tmpPaidAmount && Number(state.tmpPaidAmount) > 0){
                return {
                    ...state,
                    tmpPaidAmount: 0
                };
            }
        }
        default:
          return state
    }
}