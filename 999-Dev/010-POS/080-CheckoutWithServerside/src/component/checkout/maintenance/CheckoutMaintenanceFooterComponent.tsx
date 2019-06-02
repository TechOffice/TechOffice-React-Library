import * as React from "react";
import { Paper, List, ListItem, Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";

@(connect(
    (state: any, ownProps: any) => {
        return {
            checkoutItems: state.checkoutItems,
            model: state,
            ownProps: ownProps.openCheckoutDialog
        }
    },
    undefined
) as any)
export default class CheckoutMaintenanceFooterComponent extends React.Component<any, any>{
    
    calcRemainingPayment(){
        let payment = 0;
        for( var i=0; i<this.props.checkoutItems.length; i++){
            const currentValue = this.props.checkoutItems[i]; 
            if (currentValue.type == "product"){
                payment = Number(payment) + 
                    Number((
                        ( currentValue.price ? currentValue.price : 0 ) * 
                        ( currentValue.quantity ? currentValue.quantity : 1 ) * 
                        (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                    ).toFixed(1));
            }else {
                payment = Number(payment) + 
                    Number((
                        ( currentValue.price ? currentValue.price : 0 ) * 
                        (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                    ).toFixed(1));
            }
        }
        payment = Number(payment) + Number(this.props.model.tip?this.props.model.tip:0) - 
            Number(this.props.model.discount?this.props.model.discount:0);
        return payment;
    }

    render(){
        let isCheckout = true;
        if (this.calcRemainingPayment() <= 0){
            isCheckout = false;
        }
        return (
            <ListItem>
                <Button onClick={()=>{this.props.openCheckoutDialog()}}
                    disabled={!isCheckout}
                    variant="contained" color="primary" 
                    style={{textTransform: 'none', width: "100%"}}>
                    <Grid container>
                        <Grid item xs={4}>
                            Checkout
                        </Grid>
                        <Grid item xs={4}>
                            Total {this.props.checkoutItems.length} items
                        </Grid>
                        <Grid item xs={4}>
                            $ {
                                this.props.checkoutItems.reduce(
                                    (accumulator, currentValue) => {
                                        if (currentValue.type == "product"){
                                            return Number(accumulator) + 
                                            Number((
                                                ( currentValue.price ? currentValue.price : 0 ) * 
                                                ( currentValue.quantity ? currentValue.quantity : 1 ) * 
                                                (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                                            ).toFixed(1))
                                        }
                                        return Number(accumulator) + 
                                            Number((
                                                ( currentValue.price ? currentValue.price : 0 ) * 
                                                (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                                            ).toFixed(1))
                                    }, 0
                                ) + Number(this.props.model.tip?this.props.model.tip:0) - Number(this.props.model.discount?this.props.model.discount:0)
                            }
                        </Grid>
                    </Grid>
                </Button>
            </ListItem>
        );
    }
}