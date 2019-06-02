
export default (state = [], action)=>{
    switch (action.type){
        case "UPDATE_BOOKING_ITEM_LIST":
            return action.bookingItemList; 
        default:
            return state;
    }
}