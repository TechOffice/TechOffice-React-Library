
import { TextField, FormGroup, FormLabel, OutlinedInput, Grid, FormControl, Typography, Select, MenuItem } from "@material-ui/core";
import * as React from "react";
import * as moment from 'moment';

/**
 * Text Field 
 */
export default class DateTimeSelectGrid extends React.Component<any, any>{

    selects: any[];

    constructor(props){
        super(props);
        
        this.selects = [];

        let selectTimeArr: any [] = [];
        let startHour = props.startHour;
        let startMinute = props.startMinute;
        let endHour = props.endHour;
        let endMinute = props.endMinute;
        let interval = props.interval;
        if (typeof startHour !== "undefined" && typeof(startMinute) !== "undefined" 
                && typeof(endHour) !== "undefined" && typeof(endMinute) !== "undefined" 
                && typeof(interval) !== "undefined" ){
            let startTime = moment().hour(startHour).minute(startMinute).second(0).millisecond(0);
            let endTime = moment().hour(endHour).minute(endMinute).second(0).millisecond(0);
            let selectTime = startTime.clone();
            while(selectTime.isSameOrBefore(endTime)){
                let dropdownTime = selectTime.clone();
                selectTime.add(30, 'm');
                selectTimeArr.push(dropdownTime);
            }
        }
        selectTimeArr.forEach((selectTime)=>{
            this.selects.push(<MenuItem value={selectTime.format("HH:mm")}>{selectTime.format("HH:mm")}</MenuItem>);
        });
    }

    render(){
        return (
            <FormGroup row>
                <Typography>{this.props.label}</Typography>
                <Select {...this.props.input} 
                        input={
                            <OutlinedInput labelWidth={0}/>
                        }
                        required={this.props.required} disabled={this.props.disabled}
                        style={{height: 35}}>
                    {this.selects}
                </Select>
            </FormGroup>
        );
    }
}

