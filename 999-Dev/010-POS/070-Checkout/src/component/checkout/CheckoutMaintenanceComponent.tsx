import * as React from "react";
import { List, Paper} from "@material-ui/core";
import { connect} from "react-redux";
import CheckoutItemComponent from "./CheckoutItemComponent";
import CheckoutDialog from "./CheckoutDialog";
import CheckoutMaintenanceFooterComponent from "./maintenance/CheckoutMaintenanceFooterComponent";
import CheckoutMaintenanceHeaderComponent from "./maintenance/CheckoutMaintenanceHeaderComponent";


@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
        }
    },
    (dispatch) => ({
        addQuantity: (checkoutItem: any) => {
            dispatch({type: "ADD_QUANTITY", checkoutItem: checkoutItem})
        },
        removeQuantity: (checkoutItem: any) => {
            dispatch({type: "REMOVE_QUANTITY", checkoutItem: checkoutItem})
        },
        updateQuantity: (checkoutItem: any, quantity: any) => {
			dispatch({type: "UPDATE_QUANTITY", checkoutItem: checkoutItem, quantity: quantity})
		}
    })
) as any)
export default class CheckoutMaintenanceComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {isCheckoutDialogOpen: false}
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <Paper style={{position: "relative", minHeight: 90, paddingBottom: 90}}>
                <CheckoutMaintenanceHeaderComponent/>
                <Paper>
                    {
                        this.props.checkoutItems && this.props.checkoutItems.length > 0 &&
                        <Paper style={{maxHeight: 300, overflow: "auto"}}>
                            <List>
                                {
                                    this.props.checkoutItems.map(
                                        (checkoutItem, index)=>{
                                            return (
                                                <CheckoutItemComponent index={index}/> 
                                            );
                                        }
                                            
                                    )
                                }
                            </List>
                        </Paper>
                    }
                    <CheckoutMaintenanceFooterComponent 
                        checkoutItems={this.props.checkoutItems}
                        openCheckoutDialog={()=>{this.setState({isCheckoutDialogOpen: true})}}/>
                    <CheckoutDialog open={this.state.isCheckoutDialogOpen} 
                        onClose={()=>{this.setState({isCheckoutDialogOpen: false})}}/>
                </Paper>
            </Paper>
        );
    }
}