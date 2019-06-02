import * as React from "react";
import { Paper, Grid, Table, TableBody, TableRow, TableCell, Divider, TextField, Button, IconButton, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CheckoutSummaryTableComponent from "./CheckoutSummaryTableComponent";
import CheckoutSummaryPaidComponent from "./CheckoutSummaryPaidComponent";
import CheckoutSummaryPaidResultComponent from "./CheckoutSummaryPaidResultTableComponent";

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
            <Paper style={{padding: 10}}>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                        <div style={{marginTop: 15,  marginLeft: 15 }}>
                            <Typography variant="title">
                                Checkout Summary
                            </Typography>
                        </div>
                        <CheckoutSummaryTableComponent/>
                        <CheckoutSummaryPaidResultComponent/>
                    </Grid>
                    <Grid item xs={6}>
                        <CheckoutSummaryPaidComponent/>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}