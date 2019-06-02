import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import { MemoryRouter, Route, withRouter } from "react-router";
import App1 from "./App1";
import App2 from "./App2";
import { Link } from "react-router-dom";
import app1Epic from "./app1Epic";
import app2Epic from './app2Epic';
import { epicSubject } from "./epicMiddleware";
import store from "./store";

@(withRouter as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.location) {
            console.log(nextProps.location);
            this.onRouteChanged(nextProps.location);
        }
    }

    onRouteChanged(location: any) {
        switch(location.pathname){
            case "/App1": {
                epicSubject.next(app1Epic);
                break;
            }
            case "/App2": {
                epicSubject.next(app2Epic);
                break;
            }
            default:
                break;
        }
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <ul>
                    <li><Link to="/App1">App1</Link></li>
                    <li><Link to="/App2">App2</Link></li>
                </ul>
            </div>    
        )
    }

}


ReactDOM.render(
    <MemoryRouter>
        <Provider store={store}>
            <div>
                <App />
                <Route exact path="/App1" component={App1}/>
                <Route path="/App2" component={App2}/>
            </div>
        </Provider>
    </MemoryRouter>, 
document.getElementById('app'));


