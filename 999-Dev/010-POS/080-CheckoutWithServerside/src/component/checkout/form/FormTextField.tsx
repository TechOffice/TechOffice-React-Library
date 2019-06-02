import { TextField, FormGroup, FormLabel, OutlinedInput } from "@material-ui/core";
import * as React from 'react';
import * as _ from "lodash";

/**
 * Text Field 
 */
export default (props: any) => {
    return(
        <FormGroup >
            <OutlinedInput 
                style={{height:35}}
                labelWidth={0}
                value={_.get(props.model, props.name)}
                name={props.name}
                onChange={(event)=>{props.updateFormField(props.name, event, props.inputType)}}
            />
        </FormGroup>
    )
};
