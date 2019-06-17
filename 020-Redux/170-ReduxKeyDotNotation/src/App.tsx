import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import store from "./store/store";

@(connect( 
    (state: any)=> ({
        data: state
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
                <div>Counter: {this.props.data.test.counter}</div>
                <input name="test.counter" value={this.props.data.test.counter} onChange={(event)=>this.props.update(event)}/>
            </div>            
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


