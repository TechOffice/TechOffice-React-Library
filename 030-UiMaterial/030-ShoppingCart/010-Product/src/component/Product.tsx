import * as React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";


export default class Product extends React.Component<any, any>{
 
    render(){
        return(
            <Card style={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia image="static/images/10412368723880252_1.jpg"
                        style={{height: 140}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Title
                        </Typography>
                        <Typography component="p">
                            Content
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        );
    }
}