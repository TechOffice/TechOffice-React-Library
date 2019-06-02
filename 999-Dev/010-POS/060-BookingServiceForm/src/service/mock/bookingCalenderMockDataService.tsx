import bookingCalendarService from "../bookingCalendarService";

export default {
    getMockData: function(){
        var mockBookingItemList = [
            {
                id: 1,
                desc: "Tester 1",
                bookedTimeslotList: [
                    {
                        id: 1,
                        startTime: new Date(2019, 0, 31, 11),
                        endTime: new Date(2019, 0, 31, 11, 30),
                        name: "Booking Customer 1",
                        contactPhone: "123456789"
                    },
                    {
                        id: 2,
                        startTime: new Date(2019, 0, 31, 13),
                        endTime: new Date(2019, 0, 31, 15, 30),
                        name: "Booking Customer 2",
                        contactPhone: "123456789"
                    }
                ],
                timeslotList: []
            },
            {
                id: 2,
                desc: "Tester 2"
            }
        ];
        
        mockBookingItemList.forEach(function(bookingItem){
            bookingItem.timeslotList = bookingCalendarService.getTimeslotList(bookingItem.bookedTimeslotList);
        });

        return mockBookingItemList;
    }
}