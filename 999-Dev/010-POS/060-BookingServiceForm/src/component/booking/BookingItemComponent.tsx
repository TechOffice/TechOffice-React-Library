import * as React from "react";
import { Paper, Grid, List, ListItem, ListItemText, Button, Popper, FormControl } from "@material-ui/core";
import BookingTimeslotDetailPopperComponent from "./BookingTimeslotDetailPopperComponent";
import BookingTimeslotUnavailableComponent from "./BookingTimeslotUnavailableComponent";
import BookingTimeslotAvailableComponent from "./BookingTimeslotAvailableComponent";
import { connect } from "react-redux";

@(connect(
    (state: any, ownProps: any)=>{
        return {
            bookingItem: state.bookingCalender.bookingItemList[ownProps.bookingItemIndex]
        };
    },
    (dispatch) => ({
        openTimeslotDetail: function(timeslotDetailTarget, selectedTimeslot){
            dispatch({
                type: "OPEN_TIMESLOT_DETAIL_POPPER",
                timeslotDetailTarget: timeslotDetailTarget.currentTarget,
                selectedTimeslot: selectedTimeslot
            })
        }
    })
) as any)
export default class BookingItemComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Paper>
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
                                                onClick={(event)=>{this.props.openTimeslotDetail(event, timeslot)}}>
                                                <FormControl>
                                                    {timeslot.booked
                                                        ? 
                                                            <BookingTimeslotUnavailableComponent timeslot={timeslot}/>
                                                        : 
                                                            <BookingTimeslotAvailableComponent timeslot={timeslot}/>
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