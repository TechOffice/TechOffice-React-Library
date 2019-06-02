import { createEpicMiddleware } from "redux-observable";
import { mergeMap, switchMap } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";
import app1Epic from "./app1Epic";

const epicMiddleware = createEpicMiddleware<any>();

const epicSubject = new BehaviorSubject(app1Epic);

const rootEpics = (action$, state$, dependencies) => epicSubject.pipe(
    switchMap(
        epic => epic(action$, state$, dependencies)
    )
);

export {
    epicMiddleware,
    epicSubject,
    rootEpics
}