import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import { Provider, connect } from "react-redux";
import { AppBar, Toolbar } from "@material-ui/core";
import MenuComponent from "./component/MenuComponent";
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import MomentUtils from '@date-io/moment';
import store from "./store";
import CheckoutComponent from "./component/checkout/CheckoutComponent";
import LoginComponent from "./component/login/LoginComponent";
import { MemoryRouter } from "react-router";
import AlertComponent from "./component/message/AlertComponent";

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
        this.state = {
            logined: false
        }
    }

    render(){
        if (!this.state.logined){
            return (
                <LoginComponent login={()=>{this.setState({logined: true})}}/>
            );
        }
        return (
            <div style={{ display: 'flex'}}>
                <AppBar position="fixed" style={{height: 50}}>
                    <Toolbar></Toolbar>
                </AppBar>
                <MenuComponent/>
                <div >
                    <div style={{height: 70}}></div>
                    <CheckoutComponent/>
                </div>
                <AlertComponent/>
            </div>                    
        );
    }
}


ReactDOM.render(
    <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
            <MemoryRouter>
                <App />
            </MemoryRouter>
        </MuiPickersUtilsProvider>
    </Provider>, 
document.getElementById('app'));

    
