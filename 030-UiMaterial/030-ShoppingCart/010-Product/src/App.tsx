import { MemoryRouter } from "react-router";
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import * as ReactDOM from "react-dom";
import Product from "./component/Product";

class App extends React.Component{
    
    render(){
        return (
            <Paper>
				<Product/>
            </Paper>            
        )
    }

}

ReactDOM.render(
    <MemoryRouter>
        <App />
    </MemoryRouter>, 
document.getElementById('app'));

    
