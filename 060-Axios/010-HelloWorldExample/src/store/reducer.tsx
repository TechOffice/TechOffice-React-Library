let requestCounter = 0;

export default function reducer (state: any, action: any) {
    switch(action.type){
        case "REQUEST":
            requestCounter = requestCounter + 1;
            console.log("request");
            return {
                ...state,
                loading: {
                    inProgress: true
                }
            }
        case "REQUEST_DONE":
            requestCounter = requestCounter - 1;
            console.log("request done");
            if (requestCounter == 0 ){
                return {
                    ...state,
                    loading: {
                        inProgress: false
                    }                
                }
            }
            return {
                ...state,
                loading: {
                    inProgress: true
                }          
            };
        default:
            return state;
    }
}
