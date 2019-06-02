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
import store from "./store";

@(connect( 
    function(state: any){
        return {};
    } ,
    function(dispatch){
        return {};
    }    
) as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
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

    
