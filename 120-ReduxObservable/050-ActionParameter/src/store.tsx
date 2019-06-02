import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import { createEpicMiddleware, combineEpics, ofType } from 'redux-observable';
import { delay, mapTo, map} from 'rxjs/operators';


const epicMiddleware = createEpicMiddleware();

const pingEpic = action$ => action$.pipe(
    ofType('ADD_COUNTER'),
    map(value => {
        console.log(value);
        return { type: 'DECREASE_COUNTER', n: 1 }
    })
);

const rootEpics =  combineEpics(    
    pingEpic
);

export default createStore(
    reducer, 
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpics);


