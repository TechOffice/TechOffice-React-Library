import * as React from "react";
import { Paper, Popper, Grid, Radio, RadioGroup, FormControlLabel, Checkbox, TextField, FormControl, InputLabel } from "@material-ui/core";
import { DateTimePicker } from "material-ui-pickers";
import { connect } from "react-redux";
import BookingTimeslotDetailEditComponent from "./BookingTimeslotDetailEditComponent";
import BookingTimeslotDetailViewComponent from "./BookingTimeslotDetailViewComponent";


@(connect(
    (state: any)=>{
        return {
            bookingTimeslotDetailPopper: state.bookingCalender.bookingTimeslotDetailPopper
        }
    },
    (dispatch)=>({

    })
) as any)
export default class BookingTimeslotDetailPopperComponent extends React.Component<any, any>{
    value;

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Popper open={this.props.bookingTimeslotDetailPopper.timeslotDetailOpen} anchorEl={this.props.bookingTimeslotDetailPopper.timeslotDetailTarget} placement="right-start" >
                {
                    this.props.bookingTimeslotDetailPopper.selectedTimeslot && 
                    this.props.bookingTimeslotDetailPopper.selectedTimeslot.booked 
                        ? <BookingTimeslotDetailViewComponent/>
                        : <BookingTimeslotDetailEditComponent/>
                }                
            </Popper>
        );
    }
}