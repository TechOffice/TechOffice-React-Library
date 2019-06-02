import * as React from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import TextField from './TextField';
import { Grid } from '@material-ui/core';


@(reduxForm({
    form : 'simple'
}) as any)
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



