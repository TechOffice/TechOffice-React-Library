import * as React from "react";
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, DialogTitle } from "@material-ui/core";
import { connect } from "react-redux";

@(connect(
    (state: any) => {
       return {
            alert: state.alert
       }
    }, 
    (dispatch) => {
        return {
            closeAlert: function(){
                dispatch({
                    type: "CLOSE_ALERT"
                });
            }
        }
    }
 ) as any)
export default class extends React.Component<any, any>{

    render(){
        const alert = this.props.alert;
        if (alert && alert.message){
            return (
                <div>
                    <Dialog open={alert} disableBackdropClick={true} >
                        <DialogTitle>
                            Message
                        </DialogTitle>
                        <DialogContent style={{minWidth: 300}}>
                            <DialogContentText>
                                {alert.message}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={()=>{this.props.closeAlert()}} color="primary">
                                OK
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            );
        }
        return (
            <div></div>
        )
    }
    
}