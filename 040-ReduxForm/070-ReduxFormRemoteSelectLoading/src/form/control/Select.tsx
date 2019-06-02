import { Select, FormControl, InputLabel } from "@material-ui/core";
import * as React from 'react';

export default (field: any) => (
    <FormControl style={{minWidth: 120}}>
        <InputLabel>{field.label}</InputLabel>
        <Select {...field.input} required={field.required} disabled={field.disabled}>
            {field.children}
        </Select>
    </FormControl>
);
