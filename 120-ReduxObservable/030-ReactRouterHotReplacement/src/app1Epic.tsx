import { ofType, Epic, combineEpics } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";
import { Action } from "redux";

const pingEpic = (action$)=> action$.pipe(
    ofType('ADD_COUNTER'),
    delay(1000), 
    mapTo({ type: 'DECREASE_COUNTER', n: 1 })
);

export default combineEpics<Action, Action, any>(    
    pingEpic
);

