import * as React from "react";
import { Drawer, IconButton, AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';


export default class PersistentDrawerComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            open: true
        }
    }

    render(){
        const width = 300;
        return (
            <div style={{display: 'flex'}}>
                <AppBar position="fixed" 
                        style={{
                            marginLeft: this.state.open ? width : 0, 
                            width: this.state.open ? `calc(100% - ${width}px)`: "100%"
                        }}>
                    <Toolbar>
                        <IconButton
                                style={{display: this.state.open ? 'none': 'block'}}
                                onClick={()=>this.setState({open: true})}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                         Persistent Drawer
                         </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="persistent"
                        anchor="left"
                        open={this.state.open}
                        style={{width: width}}>
                    <Paper style={{width: width}}> 
                        <IconButton onClick={()=>this.setState({open: false})}>
                            <ChevronLeftIcon/> 
                        </IconButton>
                    </Paper>
                </Drawer>
            </div>
        );
    }
}