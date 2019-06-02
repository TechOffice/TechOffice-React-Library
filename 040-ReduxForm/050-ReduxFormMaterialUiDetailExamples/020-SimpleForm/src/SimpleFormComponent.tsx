import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from './TextField';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

/**
 * Simple Form Component 
 */
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
@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | any , any >{

    constructor(props: any){
        super(props);
        this.state = props;
    }

    render(){
        return (
            <form>
                <Grid container>
                    <Grid item>
                        <Field name="simpleTextField1" label="Simple Text Field 1" component={TextField}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="requiredTextField1" label="Required Text Field 1" component={TextField} required/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="disabledTextField1" label="Disabled Text Field 1" component={TextField} disabled/>
                    </Grid>
                </Grid>
            </form>
        );
    }
}



