import { createStore, applyMiddleware, Action } from "redux";
import reducer from "./store/reducer";
import { createEpicMiddleware, combineEpics, ofType, Epic } from 'redux-observable';
import { delay, mapTo, switchMap, mergeMap} from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";


const epicMiddleware = createEpicMiddleware<any>();

const pingEpic = (action$)=> action$.pipe(
    ofType('ADD_COUNTER'),
    delay(1000), 
    mapTo({ type: 'DECREASE_COUNTER', n: 1 })
);

const rootEpics: Epic<Action, Action, any> =  combineEpics(    
    pingEpic
);

export default createStore(
    reducer, 
    applyMiddleware(epicMiddleware)
);

const epic$ = new BehaviorSubject(rootEpics);

const rootEpic = (action$, state$, dependencies) => epic$.pipe(
    mergeMap(epic => epic(action$, state$, dependencies))
);

epicMiddleware.run(rootEpic);

const pingEpic2 = action$ => action$.pipe(
    ofType('ADD_COUNTER'),
    delay(1000), 
    mapTo({ type: 'DECREASE_COUNTER', n: 2 })
);

const rootEpics2 =  combineEpics(    
    pingEpic2
);


epic$.next(rootEpics2);
