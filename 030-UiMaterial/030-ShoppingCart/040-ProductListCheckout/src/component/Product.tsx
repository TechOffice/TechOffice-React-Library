import * as React from "react";
import { connect} from "react-redux";
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from "@material-ui/core";

@(connect( 
    (state) => {},
    (dispatch) => ({
        checkout: (product) => {dispatch({type: "ADD_PRODUCT", product: product })}
    })
) as any)
export default class Product extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            product: this.props.product
        };
        console.log(this.props.product);
    }

    render(){
        return(
            <Card style={{maxWidth: 345}}>
                <CardActionArea>
                    <CardMedia image={this.state.product.imageSrc}
                        style={{height: 140}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.state.product.name}
                        </Typography>
                        <Typography component="p">
                            {this.state.product.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>{this.props.checkout(this.state.product)}}>
                        Checkout
                    </Button>
                </CardActions>
            </Card>
        );
    }
}