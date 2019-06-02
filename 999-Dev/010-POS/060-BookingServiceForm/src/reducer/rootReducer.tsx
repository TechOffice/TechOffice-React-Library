import { combineReducers } from "redux";
import { reducer } from "redux-form";
import bookingCalenderReducer from "./bookingCalenderReducer";

export default combineReducers({
    form: reducer,
    bookingCalender: bookingCalenderReducer
});