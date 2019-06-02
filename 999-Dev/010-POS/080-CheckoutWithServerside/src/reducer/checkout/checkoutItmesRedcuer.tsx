import * as _ from "lodash";

export default (checkoutItems = [], action)=>{
    switch(action.type){
        case "ADD_PRODUCT":
            if (action.product){
                let newCheckoutItems = checkoutItems.slice();
                let checkoutItem = action.product;
                newCheckoutItems.push(checkoutItem);
                return newCheckoutItems;
            }
            return checkoutItems
        case "REMOVE_CHECKOUT_ITEM_FIELD":
            if (_.isInteger(action.index)){
                let newCheckoutItems = [...checkoutItems];
                newCheckoutItems.splice(action.index, 1);
                return newCheckoutItems;
            }
            return checkoutItems
        case "UPDATE_CHECKOUT_ITEM_FIELD":
            if (_.isInteger(action.index) && action.event){
                return checkoutItems.map((checkoutItem, index)=>{
                    if (index == action.index){
                        let name    =   action.event.target.name;
                        let value   =   action.event.target.value; 
                        if (action.inputType == 'integer'){
                            if (!isNaN(Number(value))){
                                return {
                                    ...checkoutItem,
                                    [name]: value
                                };
                            }else {
                                let originalValue = checkoutItem[name];
                                if (!originalValue){
                                    originalValue = "";
                                }
                                return {
                                    ...checkoutItem,
                                    [name]: originalValue
                                };
                            }
                        }
                        return {
                            ...checkoutItem,
                            [name]: value
                        };
                    }
                    return checkoutItem
                });
            }
            return checkoutItems;
        default: 
            return checkoutItems;
    }
}
