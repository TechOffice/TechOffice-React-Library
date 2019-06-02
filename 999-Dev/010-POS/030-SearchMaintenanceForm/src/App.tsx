import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SearchResultDetailComponent from "./component/SearchResultDetailComponent";
import { Provider, connect } from "react-redux";
import SearchPanelComponent from "./component/SearchPanelComponent";
import { Grid } from "@material-ui/core";

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
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                            <SearchPanelComponent/>
                    </Grid>
                    <Grid item xs={6}>
                        <SearchResultDetailComponent onSubmit={this.handleSimpleFormSubmit}/>
                    </Grid>
                </Grid>
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

    
