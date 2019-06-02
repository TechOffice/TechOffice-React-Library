import * as React from "react";
import { Paper, Table, TableRow, TableCell, TableBody, Typography } from "@material-ui/core";
import { connect } from "react-redux";

@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
            model: state
        }
    },
    undefined
) as any)
export default class extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <Table>
                    <TableBody>
                        {
                            this.props.checkoutItems.map(
                                (checkoutItem, index)=>{
                                    return (
                                        <TableRow>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{checkoutItem.name}</TableCell>
                                            <TableCell align="right">
                                                $ {   
                                                    checkoutItem.type == 'product' 
                                                    ?
                                                        (
                                                            ( checkoutItem.price ? checkoutItem.price : 0 ) * 
                                                            ( checkoutItem.quantity ? checkoutItem.quantity : 1 ) * 
                                                            (1 - (checkoutItem.discountPct ? checkoutItem.discountPct : 0)/100 )                              
                                                        ).toFixed(1) 
                                                    :
                                                        (
                                                            ( checkoutItem.price ? checkoutItem.price : 0 ) * 
                                                            (1 - (checkoutItem.discountPct ? checkoutItem.discountPct : 0)/100 )                             
                                                        ).toFixed(1)
                                                }      
                                            </TableCell>
                                        </TableRow>
                                    );
                                }
                                    
                            )                                    
                        }
                        <TableRow>
                            <TableCell colSpan={2} align="right"><b>Discount</b></TableCell>
                            <TableCell align="right">$ {this.props.model.discount}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} align="right"><b>Tip</b></TableCell>
                            <TableCell align="right">$ {this.props.model.tip}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2} align="right"><b>Total</b></TableCell>
                            <TableCell align="right">$ {
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
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        );
    }    
}