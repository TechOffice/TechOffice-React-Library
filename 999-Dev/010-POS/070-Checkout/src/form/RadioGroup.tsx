import * as React from 'react';
import { FormControl, FormLabel, RadioGroup, FormGroup} from "@material-ui/core";


export default (field: any) => {
    return(
        <FormGroup >
            <FormLabel>{field.label}</FormLabel>
            <FormControl>
                <RadioGroup
                    {...field.input}>
                    {field.children}
                </RadioGroup>
                {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
            </FormControl>
        </FormGroup>
    );
};
