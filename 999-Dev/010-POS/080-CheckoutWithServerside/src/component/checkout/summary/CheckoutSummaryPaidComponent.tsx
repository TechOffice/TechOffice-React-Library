import * as React from "react";
import { Paper, TextField, Grid, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import FormTextField from "../form/FormTextField";

@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
            paidResults: state.paidResults,
            model: state
        }
    },
    (dispatch) => {
        return {
            updateFormField: function(name, event, inputType){
                dispatch({
                    type: "UPDATE_FIELD",
                    name: name,
                    event: event,
                    inputType: inputType
                });
            }, 
            alert: function(message){
                dispatch({
                    type: "ADD_ALERT",
                    message: message
                });
            },
            pay: function(type, amount, desc){
                dispatch({
                    type: "ADD_PAID_RESULT",
                    paidResult: {
                        type,
                        amount,
                        desc
                    }
                })
            }
        }
    }
) as any)
export default class extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    calcRemainingPayment(){
        let remainingPayment = 0;
        for( var i=0; i<this.props.checkoutItems.length; i++){
            const currentValue = this.props.checkoutItems[i]; 
            if (currentValue.type == "product"){
                remainingPayment = Number(remainingPayment) + 
                    Number((
                        ( currentValue.price ? currentValue.price : 0 ) * 
                        ( currentValue.quantity ? currentValue.quantity : 1 ) * 
                        (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                    ).toFixed(1));
            }else {
                remainingPayment = Number(remainingPayment) + 
                    Number((
                        ( currentValue.price ? currentValue.price : 0 ) * 
                        (1 - (currentValue.discountPct ? currentValue.discountPct : 0)/100 )                              
                    ).toFixed(1));
            }
        }
        remainingPayment = Number(remainingPayment) + Number(this.props.model.tip?this.props.model.tip:0) - 
            Number(this.props.model.discount?this.props.model.discount:0);

        for (var i=0; i<this.props.paidResults.length; i++){
            const paidResult = this.props.paidResults[i];
            remainingPayment = Number(remainingPayment) - Number(paidResult.amount);
        }
        return remainingPayment;
    }

    pay(type, desc){
        if (Number(this.props.model.tmpPaidAmount) > 0 ){
            const remainingPayment = this.calcRemainingPayment();
            const newRemainingPayment = Number(remainingPayment) - Number(this.props.model.tmpPaidAmount);
            if (newRemainingPayment < 0){
                this.props.alert("Payment > Remaining Payment");
            }else {
                this.props.pay(type, this.props.model.tmpPaidAmount, desc);
            }
        } 
    }

    payCash(){
        this.pay("CASH", "Cash")
    }

    payCreditCard(){
        this.pay("CASH", "Credit Card")
    }

    payEwallet(){
        this.pay("CASH", "eWallet")
    }

    render(){
        if (this.calcRemainingPayment() > 0) {
            return (
                <Paper>
                    <div style={{marginTop: 15,  marginLeft: 15 }}>
                        <Typography variant="title">
                            Paid
                        </Typography>
                    </div>
                    <Grid container direction="column">
                        <Grid item>
                            <div style={{float: 'right', marginRight: 30, marginTop: 30, marginBottom: 30}}>
                                <FormTextField {...this.props} name="tmpPaidAmount" inputType="integer"/>                         
                            </div>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={8} 
                                style={{marginLeft: 30, marginRight: 30, marginBottom: 30}}>
                                <Grid item xs={4}>
                                    <Button variant="contained" color="primary" 
                                        style={{textTransform: 'none', width: 120}}
                                        onClick={()=>{
                                            this.payCash();
                                        }}>
                                        Cash
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="contained" color="primary" 
                                        style={{textTransform: 'none', width: 120}}
                                        onClick={()=>{this.payCreditCard()}}>
                                        Credit Card
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button variant="contained" color="primary" 
                                        style={{textTransform: 'none', width: 120}}
                                        onClick={()=>{this.payEwallet()}}>
                                        eWallet
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            );
        }else {
            return (
                <Paper>
                    <div style={{padding: 30}}>
                        <Typography variant="h3" align="center">
                            Complete
                        </Typography>
                        <div style={{justifyContent: 'center', display: 'flex', marginTop: 30, marginBottom: 30}}>
                            <Button variant="contained" color="primary" disabled>
                                Print Receipt
                            </Button>
                        </div>
                    </div>
                </Paper>
            )
        }
    }
}