import * as React from "react";
import { Paper, Grid, List, ListItem, ListItemText, Button, Popper, FormControl } from "@material-ui/core";
import BookingTimeslotPopperComponent from "./BookingTimeslotPopperComponent";
import bookingCalendarService from "../../service/bookingCalendarService";
import BookingUnavailableTimeslotComponent from "./BookingUnavailableTimeslotComponent";
import BookingAvailableTimeslotComponent from "./BookingAvailableTimeslotComponent";

export default class BookingItemComponent extends React.Component<any, any>{

    bookingTimeslotPopperComponent: any;

    constructor(props){
        super(props);
        this.bookingTimeslotPopperComponent = React.createRef();
    }

    openTimeslotDetail(event, timeslot){
        this.bookingTimeslotPopperComponent.selectTimeslot(event, timeslot);
    }

    render(){
        return (
            <Paper>
                <BookingTimeslotPopperComponent ref={instance => {this.bookingTimeslotPopperComponent = instance}}/>
                <Grid container direction="column">
                    <Grid item>
                        <h1>{this.props.bookingItem.desc}</h1>
                    </Grid>
                    <Grid item>
                       <List>
                            {
                                this.props.bookingItem.timeslotList.map(timeslot => {
                                    return (
                                        <ListItem dense divider>
                                            <Button variant="contained" fullWidth color={timeslot.booked? "primary": "default"}
                                                onClick={(event)=>{this.openTimeslotDetail(event, timeslot)}}>
                                                <FormControl>
                                                    {timeslot.booked
                                                        ? 
                                                            <BookingUnavailableTimeslotComponent timeslot={timeslot}/>
                                                        : 
                                                            <BookingAvailableTimeslotComponent timeslot={timeslot}/>
                                                    }
                                                </FormControl>
                                            </Button>
                                        </ListItem>
                                    )
                                })
                            }
                       </List>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}