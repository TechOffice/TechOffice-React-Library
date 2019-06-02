import * as React from "react";
import * as ReactDOM from "react-dom";
import AsyncSelect from 'react-select/lib/Async';

class App extends React.Component<any, any>{
    
    colourOptions;

    constructor(props){
        super(props);
        this.colourOptions = [
            { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
            { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
            { value: 'purple', label: 'Purple', color: '#5243AA' },
            { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
            { value: 'orange', label: 'Orange', color: '#FF8B00' },
            { value: 'yellow', label: 'Yellow', color: '#FFC400' },
            { value: 'green', label: 'Green', color: '#36B37E' },
            { value: 'forest', label: 'Forest', color: '#00875A' },
            { value: 'slate', label: 'Slate', color: '#253858' },
            { value: 'silver', label: 'Silver', color: '#666666' }
        ];
    }

    filterColors = (inputValue: string) => {
        return this.colourOptions.filter(i =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    loadOptions = (inputValue, callback)=>{
        setTimeout(()=>{
          callback(this.filterColors(inputValue));
        }, 1000);
    };

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <AsyncSelect 
                        cacheOptions
                        loadOptions={(inputValue, callback)=>{this.loadOptions(inputValue, callback)}}
                        defaultOptions/>
                </div>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
