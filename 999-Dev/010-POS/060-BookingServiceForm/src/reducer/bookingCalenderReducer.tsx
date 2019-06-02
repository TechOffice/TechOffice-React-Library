import { combineReducers } from "redux";
import bookingItemListReducer from "./booking/bookingItemListReducer";
import bookingTimeslotDetailPopperReducer from "./booking/bookingTimeslotDetailPopperReducer";
import { reducer } from "redux-form";

export default combineReducers({
    bookingItemList: bookingItemListReducer,
    bookingTimeslotDetailPopper: bookingTimeslotDetailPopperReducer,
    bookingTimeslotDetailForm: reducer
});