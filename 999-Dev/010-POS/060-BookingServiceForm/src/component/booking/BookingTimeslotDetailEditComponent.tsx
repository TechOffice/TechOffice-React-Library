import * as React from "react";
import { Paper, Grid, RadioGroup, FormControlLabel, Radio, Checkbox } from "@material-ui/core";
import { DateTimePicker } from "material-ui-pickers";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import TextFieldGrid from "../../form/grid/TextFieldGrid";
import DateTimeSelectGrid from "../../form/grid/DateTimeSelectGrid";
import TextField from "../../form/TextField";

@(reduxForm({form:"bookingTimeslotDetailForm"}) as any )
export default class BookingTimeslotDetailEditComponent extends React.Component<any, any>{
    
    value;

    render(){
        return (
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
                        <Field name="memberName" label="Member Name" component={TextField}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="contactPhone" label="Contact Phone" component={TextField}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="bookingStartTime" label="Start Time" component={DateTimeSelectGrid} 
                            startHour={10} startMinute={0} endHour={21} endMinute={30} interval={30}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="bookingEndTime" label="End Time" component={DateTimeSelectGrid} 
                            startHour={9} startMinute={30} endHour={22} endMinute={0} interval={30}/>                    
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
        );
    }
}