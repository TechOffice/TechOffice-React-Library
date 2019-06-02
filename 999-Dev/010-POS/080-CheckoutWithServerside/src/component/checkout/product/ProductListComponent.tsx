import * as React from 'react';
import { Grid, Paper, Divider, Collapse, Card, CardContent, IconButton, Toolbar, Typography } from '@material-ui/core';
import ProductComponent from './ProductComponent';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class ProductListComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            isServiceExpanded: true,
            isProductExpanded: true
        }
    }

    render(){
        return(
            <Paper style={{position: "relative"}}>
                {/** Service */}
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={10}>
                            <Typography variant="h6">
                                Service
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={()=>{this.setState({isServiceExpanded: !this.state.isServiceExpanded})}}>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Collapse in={this.state.isServiceExpanded} timeout="auto">
                    <Grid container>
                        <Grid item>
                            {
                                this.props.serviceList && 
                                <Grid container spacing={16}>
                                    {this.props.serviceList.map(service=><Grid item><ProductComponent product={service}/></Grid>)}          
                                </Grid>
                            }
                        </Grid>
                    </Grid>
                </Collapse>
                <Divider/>
                {/** Service */}
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item xs={10}>
                            <Typography variant="h6">
                                Product
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton onClick={()=>{this.setState({isProductExpanded: !this.state.isProductExpanded})}}>
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Collapse in={this.state.isProductExpanded} timeout="auto">
                    <Grid container>
                        <Grid item>
                            {
                                this.props.productList && 
                                <Grid container spacing={16}>
                                    {this.props.productList.map(product=><Grid item><ProductComponent product={product}/></Grid>)}          
                                </Grid>
                            }
                        </Grid>
                    </Grid> 
                </Collapse>
            </Paper>
        )
    }
}