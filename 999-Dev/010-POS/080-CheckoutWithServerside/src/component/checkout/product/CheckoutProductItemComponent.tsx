import * as React from "react";
import { ListItem, ListItemText, Grid, Fab, SvgIcon, Collapse, CardContent, Card, Typography, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckoutItemTextField from "../form/CheckoutItemTextField";
import { connect } from "react-redux";

@(connect(
    (state: any, ownProps: any)=>({
        index: ownProps.index,
        checkoutItem: state.checkoutItems[ownProps.index]
    }),
    (dispatch)=>({
        updateField: function(index, event, inputType){
            dispatch({
                type: "UPDATE_CHECKOUT_ITEM_FIELD",
                index: index,
                event: event,
                inputType: inputType
            });
        }, 
        removeField: function(index){
            dispatch({
                type: "REMOVE_CHECKOUT_ITEM_FIELD",
                index: index
            });
        }
    })
) as any)
export default class CheckoutProductItemComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        };
    }

    render(){
        let index = this.props.index;
        let checkoutItem = this.props.checkoutItem;
        return(
            <ListItem id={checkoutItem.id}>
                <Card style={{width: "100%"}}>
                   <CardContent>
                        <Grid container alignItems="center">
                            <Grid item xs={2}>
                                <IconButton onClick={()=>{this.setState({expanded: !this.state.expanded})}}>
                                    <ExpandMoreIcon />
                                </IconButton>
                            </Grid>
                            <Grid item xs={6}>
                                {checkoutItem.name} 
                            </Grid>
                            <Grid item xs={2}>
                                {   
                                    (
                                        ( checkoutItem.price ? checkoutItem.price : 0 ) * 
                                        ( checkoutItem.quantity ? checkoutItem.quantity : 1 ) * 
                                        (1 - (checkoutItem.discountPct ? checkoutItem.discountPct : 0)/100 )                              
                                    ).toFixed(1)
                                }                            
                            </Grid>
                            <Grid item xs={2}>
                                <Fab size="small" type="extended"
                                    onClick={()=>this.props.removeField(index)}>
                                    <DeleteIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Grid container>
                                <Grid item xs={3}>
                                    <CheckoutItemTextField {...this.props} name="quantity" label="Quantity" inputType="integer"/>
                                </Grid>
                                <Grid item xs={3}>
                                    <CheckoutItemTextField {...this.props} name="price" label="Price" inputType="integer"/>
                                </Grid>
                                <Grid item xs={3}>
                                    <CheckoutItemTextField {...this.props} name="discountPct" label="Discount(%)" inputType="integer"/>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <Grid item>
                                    <CheckoutItemTextField {...this.props} name="remark" label="Remark" inputType="string"/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Collapse>
                </Card>
            </ListItem>
        )
    }
}