import * as React from "react";
import { Paper, Grid, Table, TableBody, TableRow, TableCell, Divider, TextField, Button, IconButton } from "@material-ui/core";
import { connect } from "react-redux";

@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
        }
    },
    undefined
) as any)
export default class extends React.Component<any, any>{
    
    render(){
        return (
            <Paper>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
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
                                                        <TableCell>${checkoutItem.total}</TableCell>
                                                    </TableRow>
                                                );
                                            }
                                                
                                        )                                    
                                    }
                                    <TableRow>
                                        <TableCell colSpan={2} align="right"><b>Discount</b></TableCell>
                                        <TableCell>$</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2} align="right"><b>Tip</b></TableCell>
                                        <TableCell>$</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell colSpan={2} align="right"><b>Total</b></TableCell>
                                        <TableCell>$</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container>
                                        <Grid item><TextField label="Pay"/></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Grid container spacing={8}>
                                        <Grid item>
                                            <Button variant="contained" color="primary" >Cash</Button>
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="primary" >Credit Card</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}