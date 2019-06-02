import { ofType, combineEpics } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import { Action } from "redux";

const pingEpic2 = action$ => action$.pipe(
    ofType('ADD_COUNTER'),
    delay(1000), 
    mapTo({ type: 'DECREASE_COUNTER', n: 2 })
);

export default combineEpics<Action, Action, any>(    
    pingEpic2
);

