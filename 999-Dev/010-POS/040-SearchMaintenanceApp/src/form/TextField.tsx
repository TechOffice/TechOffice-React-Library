import { TextField, FormGroup, FormLabel, OutlinedInput } from "@material-ui/core";
import * as React from 'react';

/**
 * Text Field 
 * 
 * Text Field Wrapper for Redux Form
 */
export default (field: any) => (
    <FormGroup >
        <FormLabel>{field.label}</FormLabel>
        <OutlinedInput 
            {...field}
            label={null}
            {...field.input} 
            style={{height:35}}
            />
        {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
