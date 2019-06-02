import { TextField, FormGroup } from "@material-ui/core";
import * as React from 'react';

export default (field: any) => (
    <FormGroup>
        <TextField {...field.input} label={field.label} required={field.required} disabled={field.disabled}/>
        {field.meta.asyncValidating && <span>validationg...</span>}
        {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
