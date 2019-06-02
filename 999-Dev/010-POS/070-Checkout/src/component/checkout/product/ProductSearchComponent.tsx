import * as React from "react";
import { FormGroup, Typography, FormLabel, TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


export default class ProductSearchComponent extends React.Component<any, any>{
    
    render(){
        return (
            <FormGroup style={{width: "100%"}}>
            <FormLabel>
                <Typography variant="h5">
                    Search Product / Service
                </Typography>
            </FormLabel>
            <TextField 
                variant="outlined"
                style={{height:35}}
                placeholder="Search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    )
                }}                    
            />
        </FormGroup>
        );
    }
}