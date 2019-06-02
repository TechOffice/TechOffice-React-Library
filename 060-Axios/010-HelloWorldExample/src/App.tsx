import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import store from "./store/store";
import httpClient from "./http/httpClient";


@(connect( 
    // map state to props
    function(state: any){
        return {
            loading: state.loading
        }
    },
    // map dispatch to props
    function(dispatch){
        return {
        }
    }
) as any)
class App extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    getTestData(){
        for (var i=0; i< 100; i++){
            httpClient.get("static/data/test.json").then((response => {
                console.log(response);
            }));
        }
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                {this.props.loading && this.props.loading.inProgress && <div>Loading</div>}
                <div>
                    <button onClick={()=>{this.getTestData()}}>Add</button>
                </div>
                <div>Number: {this.props.counter}</div>
            </div>            
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


