import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component<any, any>{

    myRef;

    toPdf(){
        this.myRef = React.createRef();
        debugger;
    }

    render(){
        return (
            <div>
                <h1>Hello World2</h1>
                <button onClick={()=>{this.toPdf()}}>html2canvas</button>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
