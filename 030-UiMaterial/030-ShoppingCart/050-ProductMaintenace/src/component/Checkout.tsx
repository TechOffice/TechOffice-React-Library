import * as React from "react";
import { List, ListItem, ListItemText, Typography, ListItemIcon, SvgIcon, FormLabel, Grid, Fab, TextField} from "@material-ui/core";
import { connect} from "react-redux";


@(connect( 
    (state) => {
        console.log("trigger map state to props");
        console.log(state.checkoutItems);
        return {
            checkoutItems: state.checkoutItems,
        }
    },
    (dispatch) => ({
        addQuantity: (checkoutItem: any) => {
            dispatch({type: "ADD_QUANTITY", checkoutItem: checkoutItem})
        },
        removeQuantity: (checkoutItem: any) => {
            dispatch({type: "REMOVE_QUANTITY", checkoutItem: checkoutItem})
        },
        updateQuantity: (checkoutItem: any, quantity: any) => {
			dispatch({type: "UPDATE_QUANTITY", checkoutItem: checkoutItem, quantity: quantity})
		}
    })
) as any)
export default class Checkout extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {checkoutItems: props.checkoutItems};

    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);        
    }

    render(){
        return (
            <div>
                <h1>Checkout</h1>
                <List>
                <ListItem>
                    <ListItemText primary={<Typography variant="h6" >Quantity</Typography>} />
                    <ListItemText primary={<Typography variant="h6" >Product</Typography>}/>
                    <ListItemText primary={<Typography variant="h6" >Price</Typography>}/>
                </ListItem>
                    {
                        this.props.checkoutItems.map(
                            (checkoutItem)=>{
                                return (
                                    <ListItem id={checkoutItem.id}>
                                       
                                        <ListItemText primary={
                                            <Grid container>
                                                <Grid item>
                                                    <Fab size="small" onClick={()=>{this.props.addQuantity(checkoutItem)}}>
                                                        <SvgIcon>
                                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                                        </SvgIcon>
                                                    </Fab>
                                                </Grid>
                                                <Grid item>
                                                    <TextField style={{width: 30}} 
														InputProps={{maxlength: 3}}
														value={checkoutItem.quantity} 
														onChange={(event)=>{this.props.updateQuantity(checkoutItem, event.target.value)}}/>
                                                </Grid>
                                                <Grid item>
                                                    <Fab size="small" onClick={()=>{this.props.removeQuantity(checkoutItem)}}>
                                                        <SvgIcon>
                                                            <path d="M19 13H5v-2h14v2z"/>
                                                        </SvgIcon>
                                                    </Fab>
                                                </Grid>
                                            </Grid>    
                                        } />
                                        <ListItemText primary={checkoutItem.name} secondary={checkoutItem.description}/>
                                        <ListItemText primary={checkoutItem.total}/>
                                    </ListItem>
                                );
                            }
                                
                        )
                    }
                </List>
              
            </div>
        );
    }
}