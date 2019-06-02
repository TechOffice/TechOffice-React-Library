import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps } from 'redux-form';
import TextField from '../form/TextField';
import { Grid, FormControlLabel, Radio, Paper, MenuItem, Button } from '@material-ui/core';
import RadioGroup from '../form/RadioGroup';
import Select from '../form/Select';
import Datepicker from '../form/Datepicker';
import FileInputButton from '../form/FileInputButton';

/**
 * Simple Form Component 
 */
@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | any , any >{

    constructor(props: any){
        super(props);
    }

    render(){
        return (
            <Paper>
                <form noValidate onSubmit={this.props.handleSubmit}>
                    <Grid container spacing={8}>
                        <Grid container spacing={16} item xs={2}>
                            <Grid container item>
                                <Grid item>
                                    <Field name="name" label="Name" component={TextField}/>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <Field name="gender" label="Gender" component={RadioGroup}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </Field>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <Field name="post" label="Post" component={Select}>
                                        <MenuItem value={1}>Post 1</MenuItem>
                                        <MenuItem value={2}>Post 2</MenuItem>
                                        <MenuItem value={3}>Post 3</MenuItem>
                                    </Field>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <Field name="startDate" label="Start Date" component={Datepicker}/>
                                </Grid>
                            </Grid>
                            <Grid container item>
                                <Grid item>
                                    <Field name="grade" label="Grade" component={RadioGroup}>
                                        <FormControlLabel value="1" control={<Radio />} label="Grade 1" />
                                        <FormControlLabel value="2" control={<Radio />} label="Grade 1" />
                                    </Field>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid container>
                                <Grid item>
                                    <FileInputButton/>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        );
    }
}



