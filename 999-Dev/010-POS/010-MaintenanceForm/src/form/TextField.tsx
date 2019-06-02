import { TextField, FormGroup, FormLabel } from "@material-ui/core";
import * as React from 'react';

/**
 * Text Field 
 * 
 * Text Field Wrapper for Redux Form
 */
export default (field: any) => (
    <FormGroup>
        <FormLabel>{field.label}</FormLabel>
        <TextField {...field.input} required={field.required} disabled={field.disabled}/>
        {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
