import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/rootReducer";
import thunk, { ThunkDispatch } from 'redux-thunk';


@(connect( 
    function(state: any){
        return {
            counter: state.counter
        }
    },
    function(dispatch: ThunkDispatch<any,any, any>){
        return {
            onClick: function(n){
                dispatch((dispatch) => {
                    setTimeout(()=> {
                        dispatch({                            
                            type: "ADD_COUNTER",
                            n: n
                        })
                    }, 1000)
                });
            }
        }
    }
) as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <button onClick={this.props.onClick.bind(this, 1)}>Add</button>
                </div>
                <div>Number: {this.props.counter}</div>
            </div>            
        )
    }

}

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


