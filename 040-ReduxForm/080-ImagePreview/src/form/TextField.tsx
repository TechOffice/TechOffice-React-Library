import { TextField, FormGroup } from "@material-ui/core";
import * as React from 'react';

/**
 * Text Field 
 * 
 * Text Field Wrapper for Redux Form
 */
export default (field: any) => (
    <FormGroup>
        <TextField {...field.input} label={field.label} required={field.required} disabled={field.disabled}/>
        {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
