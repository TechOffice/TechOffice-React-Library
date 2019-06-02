import * as React from 'react';
import { Field, reduxForm, FormProps, FormErrors, InjectedFormProps, Fields } from 'redux-form';
import TextField from '../form/TextField';
import { Grid, FormControlLabel, Radio, Paper, MenuItem, Button } from '@material-ui/core';
import RadioGroup from '../form/RadioGroup';
import Select from '../form/Select';
import Datepicker from '../form/Datepicker';
import FileInputButton from '../form/FileInputButton';
import httpClient from '../http/httpClient';
import FileImagePreviewButton from '../form/FileImagePreviewButton';

/**
 * Simple Form Component 
 */
@(reduxForm({form : 'simple'}) as any)
export default class SimpleFormComponent extends React.Component<InjectedFormProps | any , any >{

    constructor(props: any){
        super(props);
    }

    submit(values){
        var formData = new FormData();
        for (var key in values){
            var value = values[key];
            if (value instanceof File){
                formData.append(key, value);
            }
        }
       
        formData.append("data", new Blob([JSON.stringify(values)], {
            type: 'application/json'
        }));
        httpClient.post("./api/testMultipart", formData, {headers:{ 'Content-Type': 'multipart/form-data'} }).then((res)=>{
            debugger;
        })
        
    }

    render(){
        return (
            <Paper>
                <form noValidate onSubmit={this.props.handleSubmit(this.submit)}>
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
                                    <Fields names={["profilePic"]} component={FileImagePreviewButton}/>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Button variant="contained" component="button" type="submit" color="primary">
                        Save
                    </Button>
                </form>
            </Paper>
        );
    }
}



