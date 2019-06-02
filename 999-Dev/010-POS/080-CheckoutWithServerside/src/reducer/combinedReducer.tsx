import { combineReducers } from "redux";
import checkoutItmesRedcuer from "./checkout/checkoutItmesRedcuer";
import createFormReducer from "./formReducer";
import paidResultsReducer from "./paid/paidResultsReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
    checkoutItems: checkoutItmesRedcuer,
    paidResults: paidResultsReducer,
    tip: (state=0, actiion)=>state,
    discount: (state=0, amount)=>state,
    tmpPaidAmount: (state=0, amount)=>state,
    alert: alertReducer
});