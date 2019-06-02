import * as React from "react";
import Select from "react-select";

export default class CheckoutMaintenaceHeaderHairStylistSelect extends React.Component<any, any>{

    options: any[];

    constructor(props){
        super(props);
        this.state = {
            value: undefined
        }
        this.options = [
            {value: "Testing Hair Stylist 1", label: "Testing Hair Stylist 1"},
            {value: "Testing Hair Stylist 2", label: "Testing Hair Stylist 2"},
            {value: "Testing Hair Stylist 3", label: "Testing Hair Stylist 3"}
        ]
    }

    updateValue(selectedOption){
        this.setState({
            value: selectedOption
        })
    }

    render(){
        return (
            <Select placeholder="Hair Stylist" options={this.options} isClearable
                value={this.state.value} onChange={(selectedOption)=>{this.updateValue(selectedOption)}}/>
        );
    }

}