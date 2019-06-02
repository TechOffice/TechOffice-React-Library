import * as React from 'react';
import { Select, FormControl, InputLabel, MenuItem } from '@material-ui/core';
import httpClient from '../../http/httpClient';

export default class RemoteSelect extends React.Component<any, any>{

    rendered: boolean; 

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        httpClient.get("static/data/test.json").then(res=>{
            const listItems  = res.data.map((item) =>  <MenuItem value={item.value}>{item.desc}</MenuItem>);
            this.setState({listItems});
        });
    }

    render(){
        return (
            <FormControl style={{minWidth: 120}}>
                <InputLabel>{this.props.label}</InputLabel>
                <Select {...this.props.input} required={this.props.required} disabled={this.props.disabled}>
                    {this.state.listItems}
                </Select>
            </FormControl>
        );
    }
}