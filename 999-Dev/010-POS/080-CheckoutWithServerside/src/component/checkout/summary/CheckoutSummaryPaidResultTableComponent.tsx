import * as React from "react";
import { TableBody, Table, Paper, TableRow, TableCell } from "@material-ui/core";
import { connect } from "react-redux";

@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
            paidResults: state.paidResults,
            model: state
        }
    },
    undefined
) as any)
export default class extends React.Component<any, any>{
    
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
    render(){
        const remainingPayment = this.calcRemainingPayment();
        return (
            <Paper style={{marginTop: 30}}>
                <Table>
                    <TableBody>
                        {
                            this.props.paidResults.map(
                                (paidResult, index) => {
                                    return (
                                        <TableRow>
                                            <TableCell>
                                                {paidResult.desc}
                                            </TableCell>
                                            <TableCell align="right">
                                                $ {paidResult.amount}
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                            )
                        }
                        {
                            this.props.paidResults && 
                                this.props.paidResults.length > 0 && 
                                remainingPayment > 0 && 
                            <TableRow>
                                <TableCell>
                                    <b>Remaining Payment</b>
                                </TableCell>
                                <TableCell align="right">
                                    $ {remainingPayment}
                                </TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}