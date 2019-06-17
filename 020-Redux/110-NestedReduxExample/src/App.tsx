import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import { createStore } from "redux";
import { SubAppReducer } from "./SubAppReducer";
import SubApp from "./SubApp";



class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <SubApp/>
            </div>            
        )
    }

}

const store = createStore(SubAppReducer, {counter: 0});

ReactDOM.render(
    <App />, 
document.getElementById('app'));


