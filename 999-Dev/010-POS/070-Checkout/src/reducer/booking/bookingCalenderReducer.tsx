import { combineReducers } from "redux";
import bookingItemListReducer from "./bookingItemListReducer";
import bookingTimeslotDetailPopperReducer from "./bookingTimeslotDetailPopperReducer";
import { reducer } from "redux-form";

export default combineReducers({
    bookingItemList: bookingItemListReducer,
    bookingTimeslotDetailPopper: bookingTimeslotDetailPopperReducer,
    bookingTimeslotDetailForm: reducer
});