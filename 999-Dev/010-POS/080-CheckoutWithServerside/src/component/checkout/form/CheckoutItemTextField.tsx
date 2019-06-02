import { TextField, FormGroup, FormLabel, OutlinedInput } from "@material-ui/core";
import * as React from 'react';

/**
 * Text Field 
 */
export default (props: any) => (
    <FormGroup >
        <FormLabel>{props.label}</FormLabel>
        <OutlinedInput 
            style={{height:35}}
            labelWidth={0}
            value={props.checkoutItem[props.name]}
            name={props.name}
            onChange={(event)=>{props.updateField(props.index, event, props.inputType)}}
        />
    </FormGroup>
);
