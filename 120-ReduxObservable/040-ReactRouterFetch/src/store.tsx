import { createStore, applyMiddleware, Action } from "redux";
import reducer from "./store/reducer";
import { createEpicMiddleware, combineEpics, ofType, Epic } from 'redux-observable';
import { delay, mapTo, switchMap, mergeMap} from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";
import app1Epic from './app1Epic';
import { epicMiddleware, rootEpics } from "./epicMiddleware";

export default createStore(
    reducer, 
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpics);
