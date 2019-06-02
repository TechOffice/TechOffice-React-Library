import { combineReducers } from "redux";
import checkoutItmesRedcuer from "./checkout/checkoutItmesRedcuer";

export default combineReducers({
    checkoutItems: checkoutItmesRedcuer
});