import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from './TextField';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import asyncValidate from './asyncValidate';

/**
 * Simple Form Component 
 */
@(reduxForm({
    form : 'simple',
    asyncValidate : asyncValidate,
    asyncBlurFields: ['simpleTextField1', 'simpleTextField2']
}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | any , any >{

    constructor(props: any){
        super(props);
        this.state = props;
        this.submit = this.submit.bind(this);
    }

    submit(values){
        console.log("submitted: ");
        console.log(values);
        console.log(this);
    }

    render(){
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)} noValidate>
                {JSON.stringify(this.props.asyncValidating)}
                <Grid container>
                    <Grid item>
                        <Field name="simpleTextField1" label="Simple Text Field 1" component={TextField}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="simpleTextField2" label="Simple Text Field 2" component={TextField}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="requiredTextField1" label="Required Text Field 1" component={TextField} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Field name="disabledTextField1" label="Disabled Text Field 1" component={TextField} disabled/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <button type="submit" disabled={this.props.submitting || this.props.invalid || this.props.asyncValidating}>
                            Submit
                        </button>
                    </Grid>
                </Grid>
                {JSON.stringify(this.props)}
            </form>
        );
    }
}



