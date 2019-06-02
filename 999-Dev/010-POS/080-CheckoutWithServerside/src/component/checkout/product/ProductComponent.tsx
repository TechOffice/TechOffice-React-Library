import * as React from "react";
import { connect} from "react-redux";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CardHeader } from "@material-ui/core";

@(connect( 
    undefined,
    (dispatch) => ({
        checkout: (product) => {dispatch({type: "ADD_PRODUCT", product: product })}
    })
) as any)
export default class ProductComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card style={{maxWidth: 150}}>
                <CardHeader style={{backgroundColor: "blue"}}/>
                <CardActionArea onClick={()=>{this.props.checkout(this.props.product)}}>
                    <CardContent>
                        <Typography gutterBottom variant="body2">
                            {this.props.product.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
}