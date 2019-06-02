import { Paper, Grid } from '@material-ui/core';
import BookingItemComponent from './BookingItemComponent';
import * as React from 'react';
import { connect } from "react-redux";
import bookingCalendarService from '../../service/bookingCalendarService';


export default class BookingCalenderComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {
            bookingItems: [
                {
                    id: 1,
                    desc: "Testing 1",
                    bookedTimeslotList: [
                        {
                            id: 1,
                            startTime: new Date(2019, 0, 31, 11),
                            endTime: new Date(2019, 0, 31, 11, 30)
                        },
                        {
                            id: 2,
                            startTime: new Date(2019, 0, 31, 13),
                            endTime: new Date(2019, 0, 31, 15, 30)
                        }
                    ],
                },
                {
                    id: 2,
                    desc: "Testing 2"
                }
            ]
        };
        this.state.bookingItems.forEach(function(bookingItem){
            bookingItem.timeslotList = bookingCalendarService.getTimeslotList(bookingItem.bookedTimeslotList);
        });
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={8}>
                    {
                        this.state.bookingItems.map((item)=>{
                            return (
                                <Grid item id={item.id}>
                                    <BookingItemComponent bookingItem={item}/>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </Paper>
        );
    }
}