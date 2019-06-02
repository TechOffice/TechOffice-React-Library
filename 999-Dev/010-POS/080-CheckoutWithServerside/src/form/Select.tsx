import { Select, FormControl, FormLabel, OutlinedInput } from "@material-ui/core";
import * as React from 'react';

export default (field: any) => (
    <FormControl style={{minWidth: 120}}>
        <FormLabel>{field.label}</FormLabel>
        <Select {...field.input} 
            input={
                <OutlinedInput labelWidth={0}/>
            }
            required={field.required} disabled={field.disabled}
            style={{height: 35}}>
            {field.children}
        </Select>
    </FormControl>
);
