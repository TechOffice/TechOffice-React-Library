import { TextField, FormGroup, FormLabel, OutlinedInput } from "@material-ui/core";
import * as React from 'react';

/**
 * Datepicker Field 
 * 
 * Datepicker Field Wrapper for Redux Form
 */
export default (field: any) => (
    <FormGroup>
        <FormLabel>{field.label}</FormLabel>
        <OutlinedInput type="date" 
            {...field.input} 
            required={field.required}  
            disabled={field.disabled} 
            InputLabelProps={{
                shrink: true,
            }}
            style={{height: 35}}/>
        {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
