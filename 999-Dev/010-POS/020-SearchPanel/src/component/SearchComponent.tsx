import * as React from 'react';
import {  reduxForm, InjectedFormProps } from 'redux-form';
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

const textField = field=><TextField {...field.input}/>

@(reduxForm({form : 'search'}) as any)
export default class SearchComponent extends React.Component<InjectedFormProps | {} , any >{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{
                position: 'relative', 
                maxWidth: 300,
                marginBottom: 30
            }}> 
                <TextField placeholder="Search…" variant="outlined" style={{width: '100%'}}/>
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    top: 'calc(50% - 12px)',
                    right: 0
                }}>
                    <SearchIcon/>
                </div>
            </div>
        );
    }
}



