import { TextField, FormGroup, FormLabel } from "@material-ui/core";
import * as React from 'react';

/**
 * Datepicker Field 
 * 
 * Datepicker Field Wrapper for Redux Form
 */
export default (field: any) => (
    <FormGroup>
        <FormLabel>{field.label}</FormLabel>
        <TextField type="date" {...field.input} 
            required={field.required}  
            disabled={field.disabled} 
            InputLabelProps={{
                shrink: true,
            }}/>
        {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
