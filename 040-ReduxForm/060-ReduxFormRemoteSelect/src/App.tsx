import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SimpleFormComponent from "./SimpleFormComponent";
import { Provider, connect } from "react-redux";
import { CircularProgress, Paper, Grid } from "@material-ui/core";

const rootReducer = combineReducers({
    form: reducer.plugin({
        loading: (state, action) => {
            switch(action.type){
                case "LOADING":
                    if (!action.name){
                        return state;
                    }
                    return  {
                        ...state,
                        loaded: false
                    };
                case "COMPLETE_LOADING":
                    return {
                        ...state,
                        loaded: true
                    }
                default:
                    return state;
            }
        }
    })
});

const store = createStore(rootReducer, {});

@(connect( 
    // map state to props
    function(state: any){
        // console.log(state);
        return {
            values: state && state.form && state.form.simple && state.form.simple.values ? state.form.simple.values : {},
            simple: state && state.form && state.form.simple ? state.form.simple : {},
            form: state.form
        };
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
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <div>
                <h1>Remote Select Example</h1>
                <Grid container>
                    <Grid item>
                        <h2>Left Content</h2>
                    </Grid>
                    <Grid item>
                        <Paper style={{position: 'relative'}}>
                            {this.props.form.loading && 
                                !this.props.form.loading.loaded && 
                                <div style={{position: 'absolute', zIndex: 100, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.5}}>
                                    <CircularProgress style={{position: 'absolute', top: '50%', left: '50%'}}/>
                                </div>
                            }
                            <SimpleFormComponent/>
                            <div>
                                {this.props.values.simpleTextField1}
                            </div>
                            <div>
                                {this.props.values.simpleSelectField}
                            </div>
                            <div>
                                {this.props.values.remoteSelectField}
                            </div>
                        </Paper>           
                    </Grid>
                    <Grid item>
                        <h2>Right Content</h2>
                    </Grid>
                </Grid>
            </div> 
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));

    
