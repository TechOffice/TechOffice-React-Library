import * as React from 'react';
import { Button, Card, CardMedia } from '@material-ui/core';
import { CardMediaProps } from '@material-ui/core/CardMedia';

export default class FileInputButton extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.previewImage = React.createRef();
        this.fileInput = React.createRef();
    }

    fileInput: any;
    previewImage: any;

    file: File;

    onSelectImage(target){
        console.log(target);
        this.file = target.files[0];
        this.previewImage;
        var reader = new FileReader();
        reader.onload = (function(previewImage){
            var previewImage = previewImage;
            return function(e){
                debugger;
                console.log(previewImage);
                previewImage.current.src = e.target.result;
            };
        })(this.previewImage);   
        reader.readAsDataURL(target.files[0]);
    }

    render(){
        return(
            <div>
                <Card>
                    <img ref={this.previewImage}/>
                </Card>
                <Button variant="contained" component="label" color="primary">
                    Select
                    <input type="file" accept="image/*" ref={this.fileInput}
                        style={{ display: "none" }}  
                        onChange={(event)=>{this.onSelectImage(event.target)}}/>
                </Button>
            </div>
        );
    }
}