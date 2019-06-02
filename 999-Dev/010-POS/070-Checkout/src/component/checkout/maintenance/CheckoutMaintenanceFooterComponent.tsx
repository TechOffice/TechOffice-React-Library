import * as React from "react";
import { Paper, List, ListItem, Button, Grid } from "@material-ui/core";


export default class CheckoutMaintenanceFooterComponent extends React.Component<any, any>{
    
    render(){
        return (
            <Paper style={{position: "absolute", bottom: 0, height: 90, width: "100%"}}>
            <List>
                <ListItem>
                    <Button onClick={()=>{this.props.openCheckoutDialog()}}
                        variant="contained" color="primary" 
                        style={{textTransform: 'none', width: "100%"}}>
                        <Grid container>
                            <Grid item xs={6}>
                                Checkout
                            </Grid>
                            <Grid item xs={4}>
                                Total {this.props.checkoutItems.length} items
                            </Grid>
                            <Grid item xs={2}>
                                {
                                    this.props.checkoutItems.reduce(
                                        (accumulator, currentValue) => accumulator + currentValue.total
                                        , 0
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Button>
                </ListItem>
            </List>
        </Paper>
        );
    }
}