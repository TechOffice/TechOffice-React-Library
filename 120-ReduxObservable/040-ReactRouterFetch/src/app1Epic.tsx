import { ofType, Epic, combineEpics } from "redux-observable";
import { mergeMap, flatMap, map } from "rxjs/operators";
import { Action } from "redux";
import { of } from "rxjs";
import { async } from "rxjs/internal/scheduler/async";
import { ajax } from 'rxjs/ajax';

const pingEpic = (action$, state$)=> action$.pipe(
    ofType('FETCH_DATA'),
    mergeMap( () => {
        return new Promise(resolve => {
            console.log(state$.value);
            fetch("./data").then((res)=>{
                return res.json();
            }).then(res=> {
                resolve(res)
            })
        });
    }),
    map(data=>{
        return {
            type: 'UPDATE_DATA',
            data: data
        };
    })
);

export default combineEpics<Action, Action, any>(    
    pingEpic
);

