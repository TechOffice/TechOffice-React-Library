import { TextField } from "@material-ui/core";
import * as React from 'react';

export default (field: any) => (
    <TextField {...field.input} label={field.label} required={field.required} disabled={field.disabled}/>
);
