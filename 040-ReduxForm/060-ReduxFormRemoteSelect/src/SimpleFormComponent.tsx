import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import TextField from './form/control/TextField';
import { connect } from 'react-redux';
import { Grid, MenuItem } from '@material-ui/core';
import Select from './form/control/Select';
import RemoteSelect from './form/control/RemoteSelect';

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

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
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
                        <Field name="simpleSelectField" label="Simple Select" component={Select}>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Field>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="remoteSelectField" label="Remote Select" component={RemoteSelect}/>
                    </Grid>
                </Grid>
            </form>
        );
    }
}



