import { Select, FormControl, FormLabel } from "@material-ui/core";
import * as React from 'react';

export default (field: any) => (
    <FormControl style={{minWidth: 120}}>
        <FormLabel>{field.label}</FormLabel>
        <Select {...field.input} required={field.required} disabled={field.disabled}>
            {field.children}
        </Select>
    </FormControl>
);
