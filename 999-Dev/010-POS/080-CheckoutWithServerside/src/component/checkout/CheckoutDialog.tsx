import * as React from "react";
import { Dialog, DialogContent, DialogTitle, Toolbar, IconButton, Grid } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import CheckoutSummaryComponent from "./summary/CheckoutSummaryComponent";

export default class extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <Dialog fullScreen 
                open={this.props.open } onClose={()=>{this.props.onClose()}}
                style={{paddingTop: 50}}>
                <div>
                    <div style={{float: 'right', marginRight: 30}}>
                        <IconButton color="inherit" aria-label="Close"
                            onClick={()=>{this.props.onClose()}}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                <DialogContent>
                    <CheckoutSummaryComponent/>
                </DialogContent>
            </Dialog>
        )
    }
    
}