import { combineReducers } from "redux";

function checkoutItems(state: any = [], action: any){
    switch(action.type){
        case "ADD_PRODUCT":
            var checkoutItems = state.slice();
            for (var i=0; i<checkoutItems.length; i++){
                var checkoutItem = checkoutItems[i];
                if (checkoutItem.id == action.product.id){
                    checkoutItem.quantity = Number(checkoutItem.quantity) + 1;
                    checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
                    return checkoutItems;
                }
            }
            var checkoutItem = action.product;
            checkoutItem.quantity = 1;
            checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
            checkoutItems.push(checkoutItem);
            console.log(checkoutItems);
            return checkoutItems;
		case "ADD_QUANTITY":
			var checkoutItems = state.slice();
			for (var i=0; i<checkoutItems.length; i++){
                var checkoutItem = checkoutItems[i];
                if (checkoutItem.id == action.checkoutItem.id){
                    checkoutItem.quantity = Number(checkoutItem.quantity) + 1;
                    checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
                    return checkoutItems;
                }
            }
			return checkoutItems;
		case "REMOVE_QUANTITY":
			var checkoutItems = state.slice();
			for (var i=0; i<checkoutItems.length; i++){
                var checkoutItem = checkoutItems[i];
                if (checkoutItem.id == action.checkoutItem.id){
					if (checkoutItem.quantity > 1){
						checkoutItem.quantity = Number(checkoutItem.quantity) - 1;
						checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
						return checkoutItems;	
					}else{
						checkoutItems.splice(checkoutItems.indexOf(checkoutItem), 1);
						return checkoutItems;
					}
                }
            }
			return checkoutItems;
		case "UPDATE_QUANTITY": 
			var checkoutItems = state.slice();
			for (var i=0; i<checkoutItems.length; i++){
                var checkoutItem = checkoutItems[i];
                if (checkoutItem.id == action.checkoutItem.id){
                    checkoutItem.quantity = Number(action.quantity);
                    if (isNaN(checkoutItem.quantity)){
                        checkoutItem.quantity = 0;
                    }
                    checkoutItem.total = checkoutItem.quantity * checkoutItem.price;
                    return checkoutItems;
                }
            }
        default: 
            return state;
    }
}


export default combineReducers({
    checkoutItems
});