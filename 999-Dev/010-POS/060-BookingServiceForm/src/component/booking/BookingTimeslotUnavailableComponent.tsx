import * as React from "react";
import { Grid } from "@material-ui/core";


export default class BookingTimeslotUnavailableComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Grid container>
                <Grid item>
                    <Grid container>
                        <Grid item>
                            {this.props.timeslot.desc}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            Name:
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}