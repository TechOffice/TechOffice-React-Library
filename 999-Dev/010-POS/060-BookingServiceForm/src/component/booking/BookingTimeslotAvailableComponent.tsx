import * as React from "react";
import { List, Grid } from "@material-ui/core";

export default class BookingTimeslotAvailableComponent extends React.Component<any, any>{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <Grid container>
                <Grid item>
                    {this.props.timeslot.desc}
                </Grid>
            </Grid>
        )
    }
}