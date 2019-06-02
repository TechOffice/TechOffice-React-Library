import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SimpleFormComponent from "./component/SimpleFormComponent";
import { Provider, connect } from "react-redux";

const rootReducer = combineReducers({
    form: reducer
});

const store = createStore(rootReducer);

@(connect( 
    // map state to props
    function(state: any){
        // console.log(state);
        return {simple: state && state.form && state.form.simple && state.form.simple.values ? state.form.simple.values : {} };
    } ,
    // map dispatch to props
    function(dispatch){
        return {};
    }    
) as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = props;
        this.handleSimpleFormSubmit.bind(this);
    }

    async handleSimpleFormSubmit(values){
        const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
        console.log(values);
        await sleep(500); // simulate server latency
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                    <SimpleFormComponent onSubmit={this.handleSimpleFormSubmit}/>
                <div>
                    {JSON.stringify(this.props.simple)}
                </div>
            </div>            
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));

    
