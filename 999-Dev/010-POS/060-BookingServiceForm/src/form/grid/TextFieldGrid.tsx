
import { TextField, FormGroup, FormLabel, OutlinedInput, Grid, FormControl, Typography } from "@material-ui/core";
import * as React from "react";


export default (field: any) => (
    <FormGroup row>
            <Typography>{field.label}</Typography>
            <OutlinedInput 
                {...field}
                label={null}
                {...field.input} 
                style={{height:35}}
            />
            {field.meta.error && <span style={{color: "red"}}>{field.meta.error}</span>}
    </FormGroup>
);
