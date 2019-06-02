import AsyncSelect from 'react-select/lib/Async';
import * as React from "react";

export default class extends React.Component<any, any>{

    loadOptions = (inputValue)=>{
        return new Promise((resolve)=>{
                setTimeout(() => {
                    resolve([
                        {
                            label: "Testing Customer 1", 
                            value: "Testing Customer 1"
                        },
                        {
                            label: "Testing Customer 2", 
                            value: "Testing Customer 2"
                        },
                        {
                            label: "Testing Customer 3", 
                            value: "Testing Customer 4"
                        }
                    ].filter((i: any)=>i.label.toUpperCase().includes(inputValue.toUpperCase())));
                }, 1000);
            }
        )
    }

    render(){
        return (
            <AsyncSelect
                loadOptions={this.loadOptions}
                cacheOptions defaultOptions
                isClearable
            />
        );
    }
}