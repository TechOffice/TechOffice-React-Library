import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { createEpicMiddleware, combineEpics, ofType } from 'redux-observable';
import { delay, mapTo} from 'rxjs/operators';


const epicMiddleware = createEpicMiddleware();

const pingEpic = action$ => action$.pipe(
    ofType('ADD_COUNTER'),
    delay(1000), 
    mapTo({ type: 'DECREASE_COUNTER', n: 1 })
);

const rootEpics =  combineEpics(    
    pingEpic
);

export default createStore(
    reducer, 
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpics);


