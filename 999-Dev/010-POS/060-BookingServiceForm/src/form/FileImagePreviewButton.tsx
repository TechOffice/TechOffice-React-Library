import * as React from 'react';
import { Button, Card, CardMedia, CardContent } from '@material-ui/core';

export default class FileImagePreviewButton extends React.Component<any, any>{
    
    file: File;

    constructor(props){
        super(props);
        if (this.props.names.length == 1 ){
            this.state = {
                imageSrc: null
            }
        }else if (this.props.names.length > 1){
            this.state = {
                imageSrc: this.props[this.props.names[1]].input.value
            }
        }

    }

    updateImageSrc(imageSrc){
        this.setState({imageSrc});
    }

    onSelectImage(target){
        this.file = target.files[0];
        this.props[this.props.names[0]].input.onChange(this.file);
        var reader = new FileReader();
        reader.onload = (function(updateImageSrc){
            return function(e){
                updateImageSrc(e.target.result);
            };
        })(this.updateImageSrc.bind(this));   
        reader.readAsDataURL(target.files[0]);
    }

    render(){
        return(
            <div>
                <Card style={{maxWidth: 600}}>
                    <CardContent>
                        <CardMedia style={{height: 150, width: 150}} image={this.state.imageSrc}/>
                    </CardContent>
                </Card>
                <Button variant="contained" component="label" color="primary">
                    Select
                    <input type="file" accept="image/*" 
                        style={{ display: "none" }}  
                        onChange={(event)=>{this.onSelectImage(event.target)}}/>
                </Button>
            </div>
        );
    }
}