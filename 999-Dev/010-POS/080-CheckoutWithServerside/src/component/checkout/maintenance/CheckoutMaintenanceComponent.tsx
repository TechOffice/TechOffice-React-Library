import * as React from "react";
import { List, Paper, ListItem, Grid, Typography, TextField, OutlinedInput} from "@material-ui/core";
import { connect} from "react-redux";
import CheckoutProductItemComponent from "../product/CheckoutProductItemComponent";
import CheckoutDialog from "../CheckoutDialog";
import CheckoutMaintenanceFooterComponent from "./CheckoutMaintenanceFooterComponent";
import CheckoutMaintenanceHeaderComponent from "./CheckoutMaintenanceHeaderComponent";
import CheckoutServiceItemComponent from "../product/CheckoutServiceItemComponent";
import FormTextField from "../form/FormTextField";


@(connect( 
    (state: any) => {
        return {
            checkoutItems: state.checkoutItems,
            model: state
        }
    },
    (dispatch) => ({
        updateFormField: function(name, event, inputType){
            dispatch({
                type: "UPDATE_FIELD",
                name: name,
                event: event,
                inputType: inputType
            });
        }, 
    })
) as any)
export default class CheckoutMaintenanceComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {isCheckoutDialogOpen: false}
    }
    
    render(){
        return (
            <Paper style={{position: "relative", minHeight: 180, paddingBottom: 180}}>
                <CheckoutMaintenanceHeaderComponent/>
                <Paper>
                    {
                        this.props.checkoutItems && this.props.checkoutItems.length > 0 &&
                        <Paper style={{maxHeight: 300, overflow: "auto"}}>
                            <List>
                                {
                                    this.props.checkoutItems.map(
                                        (checkoutItem, index)=>{
                                            if (checkoutItem.type == "service"){
                                                return (
                                                    <CheckoutServiceItemComponent index={index}/> 
                                                );
                                            }
                                            return (
                                                <CheckoutProductItemComponent index={index}/> 
                                            );
                                        }
                                            
                                    )
                                }
                            </List>
                        </Paper>
                    }
                    <Paper style={{position: "absolute", bottom: 0, height: 180, width: "100%"}}>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="body2" gutterBottom={true} >
                                            Discount
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <FormTextField {...this.props} name="discount" inputType="integer"/>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={2}></Grid>
                                    <Grid item xs={2}>
                                        <Typography variant="body2" gutterBottom={true} >
                                            Tips
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <FormTextField {...this.props} name="tip" inputType="integer"/>                         
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <CheckoutMaintenanceFooterComponent 
                                openCheckoutDialog={()=>{this.setState({isCheckoutDialogOpen: true})}}/>
                        </List>
                    </Paper>
                    <CheckoutDialog open={this.state.isCheckoutDialogOpen} 
                        onClose={()=>{this.setState({isCheckoutDialogOpen: false})}}/>
                </Paper>
            </Paper>
        );
    }
}