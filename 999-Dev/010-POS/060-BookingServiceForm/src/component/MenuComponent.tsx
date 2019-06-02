import * as React from 'react';
import { Drawer, Paper, List, ListItem, ListItemIcon } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';

export default class MenuComponent extends React.Component<any, any>{
    
    render(){
        return (
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
        );
    }
}