import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import store from "./store/store";

@(connect( 
    (state: any)=> ({
        counter: state.counter
    }),
    (dispatch)=> ({
        update: function(event){
            dispatch({
                type: "UPDATE",
                event: event
            })
        }   
    })
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
                <div>Counter: {this.props.counter}</div>
                <input name="counter" value={this.props.counter} onChange={(event)=>this.props.update(event)}/>
            </div>            
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


