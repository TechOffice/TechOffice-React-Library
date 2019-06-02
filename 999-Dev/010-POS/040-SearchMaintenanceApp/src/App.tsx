import * as React from "react";
import * as ReactDOM from "react-dom";
import { combineReducers, createStore } from "redux";
import { reducer } from 'redux-form';
import SearchResultDetailComponent from "./component/SearchResultDetailComponent";
import { Provider, connect } from "react-redux";
import SearchPanelComponent from "./component/SearchPanelComponent";
import { Grid, AppBar, Toolbar, Drawer, Paper, IconButton, List, ListItem, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

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
                <Drawer
                    variant="permanent"
                    style={{flexShrink: 0, width: 80, paddingTop: 50}}>
                    <Paper >
                        <div style={{height: 50}}></div>
                        <List>
                            <ListItem button >
                                <ListItemIcon><ChevronRightIcon/></ListItemIcon>
                            </ListItem>
                            <ListItem button >
                                 <ListItemIcon><InboxIcon /></ListItemIcon>
                            </ListItem>
                            <ListItem button >
                                <ListItemIcon><MailIcon /></ListItemIcon>
                            </ListItem>
                        </List>
                    </Paper>
                </Drawer>
                <div >
                    <div style={{height: 50}}></div>
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
            </div>            
        )
    }
}


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));

    
