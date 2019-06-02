import * as React from "react";
import { Paper, Grid, MenuItem, Select } from "@material-ui/core";
import CheckoutMaintenaceHeaderHairStylistSelect from "./CheckoutMaintenanceHeaderStylistSelectComponent";
import CheckoutMaintenanceHeaderCustomerComponent from "./CheckoutMaintenanceHeaderCustomerComponent";

export default class CheckoutMaintenanceHeaderComponent extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <Grid container>
                    <Grid item xs={6}>
                        <CheckoutMaintenaceHeaderHairStylistSelect/>
                    </Grid>
                    <Grid item xs={6}>
                        <CheckoutMaintenanceHeaderCustomerComponent/>
                    </Grid>
                </Grid>
            </Paper>
        )
    }
}