const defaultState = {
    timeslotDetailOpen: false,
    timeslotDetailTarget: null,
    selectedTimeslot: null
};

export default (state = defaultState, action)=>{
    switch(action.type){
        case "OPEN_TIMESLOT_DETAIL_POPPER":
            var timeslotDetailOpen = false 
            var timeslotDetailTarget = null
            var selectedTimeslot = null;
            if (action.timeslotDetailTarget != state.timeslotDetailTarget){
                timeslotDetailTarget = action.timeslotDetailTarget
                timeslotDetailOpen = true;
                selectedTimeslot = action.selectedTimeslot;
            }
            return {
                timeslotDetailOpen: timeslotDetailOpen,
                timeslotDetailTarget: timeslotDetailTarget,
                selectedTimeslot: selectedTimeslot 
            };
        default: 
            return state;
    }
}