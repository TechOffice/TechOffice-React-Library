import * as React from 'react';
import { FormControl, TextField, FormLabel, RadioGroup, FormGroup } from "@material-ui/core";


export default (field: any) => {
    console.log(field);
    return(
        <FormGroup >
            <FormControl>
                <FormLabel>{field.label}</FormLabel>
                <RadioGroup
                    {...field.input}>
                    {field.children}
                </RadioGroup>
                {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
            </FormControl>
        </FormGroup>
    );
};
