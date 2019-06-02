import * as React from "react"
import { FormGroup, TextField } from "@material-ui/core";
import { actionTypes } from "redux-form";

/**
 * Async Validate Text Field 
 * 
 */
export default class AsyncValidateTextField extends React.Component<any,any>{
    
    asyncValidate(target){
        console.log(target);
        console.log(this.props.meta);
        this.props.meta.dispatch({
            type: actionTypes.START_ASYNC_VALIDATION, 
            meta:{
                form: this.props.meta.form,
                field: this.props.input.name
            }
        })
        setTimeout(()=>{
            var errors = {};
            errors[this.props.input.name] = "Async Validate Text Field 1 Custom Error Message";
            this.props.meta.dispatch({
                type: actionTypes.STOP_ASYNC_VALIDATION, 
                meta:{
                    form: this.props.meta.form,
                },
                payload: errors,
                error: !!(errors && Object.keys(errors).length)
            })
        }, 3000)
    }

    render(){
        return (
            <FormGroup>
                <TextField {...this.props.input} 
                    label={this.props.label} 
                    required={this.props.required} 
                    disabled={this.props.disabled}
                    onBlur={(event)=>{this.asyncValidate(event.target.value)}}/>
                {this.props.meta.error && <span style={{color: "red"}}>{this.props.meta.error}</span>}
            </FormGroup>        
        );
    }
}