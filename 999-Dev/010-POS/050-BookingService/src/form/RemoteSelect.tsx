import * as React from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';

export default class RemoteSelect extends React.Component<any, any>{

    rendered: boolean; 

    constructor(props){
        super(props);
        this.state = {};
        this.rendered = false;
    }

    componentDidMount(){
        console.log("remote select");
        console.log(this.props);
        this.props.meta.dispatch({
            type: "LOADING",
            name: this.props.input.name
        });
        setTimeout(()=>{
            var select = [
                <MenuItem value={10}>Remote Ten</MenuItem>,
                <MenuItem value={20}>Remote Twenty</MenuItem>,
                <MenuItem value={30}>Remote Thirty</MenuItem> 
            ]
            this.setState({select: select});
            this.props.meta.dispatch({
                type: "COMPLETE_LOADING",
                name: this.props.input.name
            })                     
        }, 3000);
    }

    render(){
        return (
            <FormControl style={{minWidth: 120}}>
                <InputLabel>{this.props.label}</InputLabel>
                <Select {...this.props.input} required={this.props.required} disabled={this.props.disabled}>
                    {this.state.select}
                </Select>
            </FormControl>
        );
    }
}