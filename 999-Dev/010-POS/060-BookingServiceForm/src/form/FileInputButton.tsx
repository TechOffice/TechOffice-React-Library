import * as React from 'react';
import { Button, Card, CardMedia, CardContent } from '@material-ui/core';

export default class FileInputButton extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    onSelectImage(target){
        var file = target.files[0];
        this.props.input.onChange(file);
    }

    render(){
        return(
            <Button variant="contained" component="label" color="primary">
                Select
                <input type="file" accept="image/*" 
                    style={{ display: "none" }}  
                    onChange={(event)=>{this.onSelectImage(event.target)}}/>
            </Button>
        );
    }
}