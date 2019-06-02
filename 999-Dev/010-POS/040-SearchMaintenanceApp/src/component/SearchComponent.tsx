import * as React from 'react';
import {  reduxForm, InjectedFormProps, Field } from 'redux-form';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import TextField from '../form/TextField';

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
                maxWidth: 600,
                marginBottom: 30
            }}> 
                <Field name="search" component={TextField} placeholder="Search.."/>
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



