import * as React from "react";
import { Dialog, DialogContent, DialogTitle, Toolbar, IconButton, Grid } from "@material-ui/core";
import CheckoutSummary from "./CheckoutSummary";
import CloseIcon from '@material-ui/icons/Close';

export default class extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Dialog fullScreen 
                open={this.props.open } onClose={()=>{this.props.onClose()}}
                style={{paddingTop: 50}}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={11}>
                            <DialogTitle>
                                Checkout Summary
                            </DialogTitle>
                        </Grid>
                        <Grid item xs={1}>
                            <IconButton color="inherit" aria-label="Close"
                                onClick={()=>{this.props.onClose()}}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
                <DialogContent>
                    <CheckoutSummary/>
                </DialogContent>
            </Dialog>
        )
    }
    
}