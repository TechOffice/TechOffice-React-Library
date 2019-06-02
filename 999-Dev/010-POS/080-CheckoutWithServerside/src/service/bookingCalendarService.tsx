import * as moment from 'moment';
import _default from 'material-ui-pickers/DatePicker/DatePicker';
import * as _ from 'lodash';

/**
 * Booking Calendar Service
 */
export default {

    /**
     * Get Default Timeslot List
     */
    getDefaultTimeslotList: function(): any[]{
        var defaultTimeslotList = [];

        var startTime = moment().hour(10).minute(0).second(0).milliseconds(0);
        var endTime = moment().hour(22).minute(0).second(0).milliseconds(0);
        
        var slotTime = startTime.clone();
        var defaultSequence = 0;
        while (slotTime.isBefore(endTime)){
            var timeslotStartTime = slotTime.clone();
            slotTime.add(30, 'm');
            var timeslotEndTime = slotTime.clone();
            var timeslotDesc = timeslotStartTime.format("hh:mma") + " - " + timeslotEndTime.format("hh:mma");
            var timeslot = {
                id: "available" + defaultSequence,
                startTime: timeslotStartTime,
                endTime: timeslotEndTime,
                desc: timeslotDesc,
                booked: false,
                disabled: false
            }
            defaultTimeslotList.push(timeslot);
            defaultSequence++;
        }

        return defaultTimeslotList;
    },

    /**
     * Get Timeslot List 
     * 
     * @param bookedTimeslotList 
     * @returns Timeslot List 
     */
    getTimeslotList(bookedTimeslotList: any[]): any[]{
        var defaultTimeslotList: any[] = this.getDefaultTimeslotList();
        if (bookedTimeslotList != null){
            var self = this;
            bookedTimeslotList.forEach(function(bookedTimeslot){
                bookedTimeslot.desc = moment(bookedTimeslot.startTime).format("hh:mma") +  " - " + moment(bookedTimeslot.endTime).format("hh:mma");  
                bookedTimeslot.booked = true;
                var bookedDefaultTimeslotList: any[] = self.extractTimeslotListByStartEndTime(defaultTimeslotList, bookedTimeslot.startTime, bookedTimeslot.endTime);
                var index = defaultTimeslotList.findIndex(function(o){
                    if (moment(o.startTime).isSame(moment(bookedTimeslot.startTime))){
                        return true;
                    }
                    return false;
                });
                defaultTimeslotList.splice(index, bookedDefaultTimeslotList.length, bookedTimeslot);
            });
        }
        return defaultTimeslotList;
    },
    
    /**
     * Extract Timeslot List by specified Start Time and End Time
     * 
     * @param timeslotList 
     * @param startTime 
     * @param endTime 
     * 
     * @returns Extracted Timeslot List
     */
    extractTimeslotListByStartEndTime(timeslotList: any[], startTime: Date, endTime: Date): any[]{
        var startTimeMoment = moment(startTime);
        var endTimeMoment = moment(endTime);
        var extractedTimeslotList = timeslotList.filter(function(o){
            var timeslotStartTimeMoment = moment(o.startTime);
            var timeslotEndTimeMoment = moment(o.endTime);
            if (timeslotStartTimeMoment.isSameOrAfter(startTimeMoment)
                && timeslotEndTimeMoment.isSameOrBefore(endTimeMoment)){
                return true;
            }
            return false;
        });
        return extractedTimeslotList;
    }
}

