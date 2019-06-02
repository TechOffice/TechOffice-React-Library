import * as React from 'react';
import { Dispatch } from 'redux';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from "@material-ui/core/TextField";
import { List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox, Paper } from '@material-ui/core';

const textField = field=><TextField {...field.input}/>

@(reduxForm({form : 'result'}) as any)
export default class ResultComponent extends React.Component<InjectedFormProps | {} , any >{

    constructor(props){
        super(props);
        this.state = {
            memberList: [
                {
                    id: 1,
                    name: "Member 1"
                },
                {
                    id: 2,
                    name: "Member 2"
                },
                {
                    id: 3,
                    name: "Member 3"
                },
                {
                    id: 4,
                    name: "Member 4"
                },  
                {
                    id: 5,
                    name: "Member 5"
                }
            ]
        }
    }

    render(){
        return (
            <Paper style={{maxWidth: 600}}>
                <List>
                {
                    this.state.memberList.map(value => (
                        <ListItem key={value.id}  button>
                            <ListItemText primary={value.name}/>
                            <ListItemSecondaryAction>
                                <Checkbox
                                    onChange={()=>{value.checked = !value.checked}} 
                                    checked={value.checked}/>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))
                }
                </List>
            </Paper>
        );
    }
}



