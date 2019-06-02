import * as React from "react";
import { Paper, Popper, Grid, Radio, RadioGroup, FormControlLabel, Checkbox, TextField, FormControl, InputLabel } from "@material-ui/core";
import { DateTimePicker } from "material-ui-pickers";


export default class BookingTimeslotPopperComponent extends React.Component<any, any>{
    value;

    constructor(props){
        super(props);
        this.state = {
            selectedTimeslot: props.selectedTimeslot,
            timeslotList: props.timeslotList,
            timeslotDetailOpen: false,
            timeslotDetailTarget: null
        }
    }

    selectTimeslot(event, selectedTimeslot){
        var timeslotDetailOpen = !this.state.timeslotDetailOpen;
        var timeslotDetailTarget = event.currentTarget;
        if (!timeslotDetailOpen){
            timeslotDetailTarget = null
        }
        this.setState({
            selectedTimeslot,
            timeslotDetailOpen,
            timeslotDetailTarget
        })
    }

    render(){
        return (
            <Popper open={this.state.timeslotDetailOpen} anchorEl={this.state.timeslotDetailTarget} placement="right-start" >
                <Paper>
                    <Grid container>
                        <Grid item>
                            <RadioGroup row>
                                <FormControlLabel value="memeber" label="Member" control={<Radio/>}/>
                                <FormControlLabel value="walk-in" label="Walk-in" control={<Radio/>}/>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <RadioGroup row>
                                <FormControlLabel value="male" label="Male" control={<Radio/>}/>
                                <FormControlLabel value="female" label="Female" control={<Radio/>}/>
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <FormControlLabel label="Multiple People" control={<Checkbox/>}/>
                        </Grid>
                        <Grid item>
                            <TextField/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <TextField label="Member Name"/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <TextField label="Contact Phone"/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <DateTimePicker value={this.value} onChange={(date)=>{this.value = date}}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <DateTimePicker value={this.value} onChange={(date)=>{this.value = date}}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <FormControlLabel label="Wash" control={<Checkbox/>}/>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <TextField label="Remark" multiline/>
                        </Grid>
                    </Grid>
                </Paper>
            </Popper>
        );
    }
}