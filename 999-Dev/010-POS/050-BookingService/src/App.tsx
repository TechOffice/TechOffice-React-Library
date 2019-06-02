import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import { Provider, connect } from "react-redux";
import { AppBar, Toolbar } from "@material-ui/core";
import MenuComponent from "./component/MenuComponent";
import BookingCalenderComponent from "./component/booking/BookingCalendarComponent";
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';



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
        this.state = {
            ...props,
            open: true
        };
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
            <div style={{ display: 'flex'}}>
                <AppBar position="fixed" style={{zIndex: 100000000, height: 50}}>
                    <Toolbar></Toolbar>
                </AppBar>
                <MenuComponent/>
                <div >
                    <div style={{height: 50}}></div>
                    <BookingCalenderComponent/>
                </div>
            </div>            
        )//
    }
}


ReactDOM.render(
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <App />
        </MuiPickersUtilsProvider>
    </Provider>, 
document.getElementById('app'));

    
